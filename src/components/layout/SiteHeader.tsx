"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GlobalSearch } from "@/components/search/GlobalSearch";

const nav = [
  { href: "/expedicoes", label: "Expedições" },
  { href: "/destinos", label: "Destinos" },
  { href: "/atividades", label: "Experiências" },
  { href: "/diario", label: "Diário" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isImmersive =
    pathname === "/" ||
    pathname.startsWith("/expedicoes/") ||
    (pathname.startsWith("/destinos/") && pathname !== "/destinos") ||
    (pathname.startsWith("/atividades/") && pathname !== "/atividades") ||
    (pathname.startsWith("/diario/") && pathname !== "/diario") ||
    pathname === "/sobre";
  const [solid, setSolid] = useState(!isImmersive);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      if (!isImmersive) {
        setSolid(true);
        return;
      }
      setSolid(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isImmersive]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`site-header ${solid || !isImmersive ? "is-solid" : ""}`}>
        <div className="container header-inner">
          <Link
            href="/"
            className="link-focus brand-lockup"
            aria-label="ABC Fly Expeditions — início"
          >
            <Image
              src="/brand/logo-mark-sm.png"
              alt=""
              width={240}
              height={127}
              className="brand-mark"
              priority
            />
            <span className="brand-text">
              <span className="brand-top">ABC FLY</span>
              <span className="brand-bottom">EXPEDITIONS</span>
            </span>
          </Link>

          <nav aria-label="Principal" className="desktop-nav">
            {nav.map((item) => {
              const current =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link link-focus"
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              className="header-search-btn link-focus"
              onClick={() => setSearchOpen(true)}
              aria-label="Abrir busca"
            >
              Buscar <span>⌘K</span>
            </button>
            <Link href="/solicitar-orcamento" className="btn btn-primary link-focus">
              Solicitar orçamento
            </Link>
          </nav>

          <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
            <button
              type="button"
              className="header-search-btn mobile-search-btn link-focus"
              onClick={() => setSearchOpen(true)}
              aria-label="Abrir busca"
            >
              Buscar
            </button>
            <button
              type="button"
              className="mobile-toggle link-focus"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-nav" className="mobile-nav">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              Buscar destinos e expedições
            </button>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contato" className="nav-link" onClick={() => setOpen(false)}>
              Contato
            </Link>
            <Link
              href="/solicitar-orcamento"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Solicitar orçamento
            </Link>
            <a
              href="https://wa.me/5511915285462"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Falar com especialista
            </a>
          </div>
        ) : null}
      </header>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
