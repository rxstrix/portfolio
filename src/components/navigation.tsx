"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "/blog", label: "Blog" },
    { href: "https://github.com/rxstrix", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://t.me/rxstrix", label: "Telegram" },
  ];

  const getLinkClasses = (href: string) => `
    font-bold transition-colors
    ${pathname === href ? "text-white" : "text-zinc-500 hover:text-white"}
  `;

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex max-w-5xl w-full h-16 border-b border-b-zinc-800 flex-row items-center justify-between md:px-4">
        <div className="flex flex-row items-center gap-3">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-3">
              <a href={link.href} className={getLinkClasses(link.href)}>
                {link.label}
              </a>
              {index < navLinks.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-3">
          {socialLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-3">
              {link.href.startsWith("/") ? (
                <a href={link.href} className={getLinkClasses(link.href)}>
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-zinc-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )}
              {index < socialLinks.length - 1 && <span>\</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full border-b border-b-zinc-800">
        <div className="h-16 flex items-center justify-between px-6">
          {/* Left side: Burger menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[85vw] max-w-sm border-r border-zinc-700 bg-zinc-950 p-0"
            >
              <div className="flex flex-col h-full">
                <SheetHeader className="p-6 border-b border-zinc-700">
                  <SheetTitle className="text-left text-white text-xl font-bold">
                    rxstrix.xyz
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-6 overflow-y-auto">
                  {/* Main Navigation Links */}
                  <div className="space-y-4">
                    <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">
                      Navigation
                    </h3>
                    <div className="space-y-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`block py-3 px-4 rounded-lg transition-colors ${getLinkClasses(
                            link.href
                          )} ${
                            pathname === link.href
                              ? "bg-zinc-800"
                              : "hover:bg-zinc-800"
                          }`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Social/External Links */}
                  <div className="space-y-4 pt-6 border-t border-zinc-700">
                    <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">
                      Connect
                    </h3>
                    <div className="space-y-2">
                      {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`block py-3 px-4 rounded-lg font-bold transition-colors ${
                            link.href.startsWith("/")
                              ? `${getLinkClasses(link.href)} ${
                                  pathname === link.href
                                    ? "bg-zinc-800"
                                    : "hover:bg-zinc-800"
                                }`
                              : "text-zinc-500 hover:text-white hover:bg-zinc-700"
                          }`}
                          {...(link.href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer/Bottom section */}
                <div className="mt-auto p-6 border-t border-zinc-700">
                  <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Nikita Simankov
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center: rxstrix.xyz title */}
          <div className="text-white font-bold tracking-wide text-lg">
            rxstrix.xyz
          </div>

          {/* Right side: Empty div for symmetry */}
          <div className="w-6" />
        </div>
      </div>
    </>
  );
};
