import Link from 'next/link';
import { footerData } from '@/lib/data/salaries';

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 text-white text-[11px] font-extrabold">
                Zp
              </div>
              <span>Zarplatka</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {footerData.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Данные</h3>
            <ul className="space-y-2">
              {footerData.dataLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">География</h3>
            <ul className="space-y-2">
              {footerData.geoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Сервисы</h3>
            <ul className="space-y-2">
              {footerData.servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Помощь</h3>
            <ul className="space-y-2">
              {footerData.helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-muted-foreground">
            Данные обновляются регулярно · Используем открытые источники данных
          </p>
          <p className="text-xs text-muted-foreground">
            © Zarplatka 2019–{new Date().getFullYear()}
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Данные сайта являются оценочными и могут отличаться от официальной статистики.
        </p>
      </div>
    </footer>
  );
}