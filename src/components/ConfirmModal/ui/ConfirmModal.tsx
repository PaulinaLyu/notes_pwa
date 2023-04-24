import { Typography, Box, Modal, Stack, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ConfirmModalProps {
  text: string;
  title: string;
  btn: string;
  isOpen: boolean;
  close: (val: boolean) => void;
  handleEvent: () => void;
}

export const ConfirmModal = ({
  text,
  title,
  btn,
  isOpen,
  close,
  handleEvent,
}: ConfirmModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {text}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="flex-end"
          sx={{ mt: 4 }}
        >
          <Button type="reset" onClick={() => close(false)} variant="outlined">
            Отмена
          </Button>
          <Button onClick={() => handleEvent()} variant="contained">
            {btn}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
