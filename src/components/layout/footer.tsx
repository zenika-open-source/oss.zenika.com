export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} Zenika. All rights reserved.</p>
        <p className="mt-2 text-sm">Fueling innovation through Open Source.</p>
      </div>
    </footer>
  );
}
