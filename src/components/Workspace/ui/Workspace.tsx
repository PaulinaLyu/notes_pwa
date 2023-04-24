import { Stack, Typography, Button } from "@mui/material";
import { useNote } from "../../../provider/noteProvider";
import { useEffect, useState } from "react";
import { notes } from "../../../data/notes";
import { NoteInterface } from "../../../data/dataTypes";
import { ConfirmModal } from "../../ConfirmModal";
import { WorkspaceForm } from "./WorkspaceForm";

export const Workspace = () => {
  const notesContext = useNote();
  const [data, setData] = useState<NoteInterface | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (notesContext) {
      const filteredNote = notes.filter(
        (item) => item.id === notesContext?.currentNoteId
      )[0];
      setData(filteredNote);
    }
  }, [notesContext?.currentNoteId]);

  const handleDelete = () => {
    if (notesContext) {
      notesContext.deleteNote(notesContext?.currentNoteId);
      setIsDeleteModal(false);
    }
  };

  return (
    <>
      {isDeleteModal && (
        <ConfirmModal
          text={"Подтвердите, что хотите удалить заметку"}
          title={"Удаление"}
          btn={"Удалить"}
          isOpen={isDeleteModal}
          close={setIsDeleteModal}
          handleEvent={handleDelete}
        />
      )}
      {data ? (
        <>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="flex-end"
          >
            <Button onClick={() => setIsDeleteModal(true)} variant="outlined">
              Удалить
            </Button>
            <Button onClick={() => setIsEdit(!isEdit)} variant="contained">
              {isEdit ? "Назад" : "Редактировать"}
            </Button>
          </Stack>
          {isEdit ? (
            <WorkspaceForm data={data} />
          ) : (
            <>
              <Typography variant="h4" component="h4">
                {data.title}
              </Typography>
              <Typography paragraph>{data.body}</Typography>
            </>
          )}
        </>
      ) : (
        <>
          <Typography variant="h6" component="h6">
            Выберите заметку
          </Typography>
        </>
      )}
    </>
  );
};
