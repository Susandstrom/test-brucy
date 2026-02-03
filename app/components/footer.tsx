export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-gray-600">
        <p className="text-sm">
          © {new Date().getFullYear()} Receptboken · Skapad av So
        </p>
      </div>
    </footer>
  );
}
