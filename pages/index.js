import Head from "next/head";
import Notes from "../components/Notes";
import { NotesProvider } from "../context/NotesContext";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Notes app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/note.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NotesProvider>
        <Notes />
      </NotesProvider>
    </div>
  );
}
