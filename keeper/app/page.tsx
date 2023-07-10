"use client";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card } from "./Card";

export default function Home() {
  return (
    <main>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </main>
  );
}
