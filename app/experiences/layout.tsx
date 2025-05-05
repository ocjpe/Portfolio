export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center w-full">{children}</section>
  );
}
