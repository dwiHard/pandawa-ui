import { createClient } from '@/utils/supabase/server'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Container } from '@mantine/core';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function Notes() {

  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  interface Note {
    id: number;
    title: string;
  }

  const noteData: Note[] = notes || [];
  const mappedNotes: { id: number; title: string }[] = noteData.map(note => ({
    id: note.id,
    title: note.title,
  }));

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Container>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mappedNotes.map((note) => (
              <TableRow>
                <TableCell className="font-medium">{note.id}</TableCell>
                <TableCell>{note.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </MantineProvider >
  )
}
