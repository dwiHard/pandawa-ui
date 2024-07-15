import { MantineProvider } from "@mantine/core";

export default async function Example() {
  const [random] = await fetch("https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1", {cache: "no-store"}).then(res => res.json());

  return (
    <MantineProvider>
      <div className="flex items-center justify-center h-screen">
        <p>{random}</p>
      </div>
    </MantineProvider>
  )
}
