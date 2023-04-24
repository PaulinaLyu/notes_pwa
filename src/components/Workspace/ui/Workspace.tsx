import { Stack, Typography, Button } from "@mui/material";
import { useNote } from "../../../provider/noteProvider";
import { useEffect, useState } from "react";
import { notes } from "../../../data/notes";
import { NoteInterface } from "../../../data/dataTypes";
import { ConfirmModal } from "../../ConfirmModal";

export const Workspace = () => {
  const currentNote = useNote();
  const [data, setData] = useState<NoteInterface | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  useEffect(() => {
    if (currentNote) {
      const filteredNote = notes.filter(
        (item) => item.id === currentNote?.note
      )[0];
      setData(filteredNote);
    }
  }, [currentNote]);

  const handleDelete = () => {
    if (currentNote) {
      console.log(currentNote?.note);
      // const filteredNotes = notes.filter(
      //   (item) => item.id === currentNote?.note
      // );
      // notes = filteredNotes
      // setData(filteredNote);
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
            <Button variant="contained">Редактировать</Button>
          </Stack>

          <Typography variant="h4" component="h4">
            {data.title}
          </Typography>
          <Typography paragraph>{data.body}</Typography>
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
