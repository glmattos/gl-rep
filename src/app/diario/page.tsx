import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Diário",
  description:
    "Stories, guias e relatos de exploração — o universo editorial da ABC Fly Expeditions.",
};

export default function DiarioPage() {
  const posts = getAllPosts();

  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Universo editorial</span>
            <h1 className="display">Diário</h1>
            <p>
              Blog + travel stories + guides. Conteúdo que aumenta o desejo de
              viajar — e conecta cada história a uma expedição real.
            </p>
          </div>
          <div className="card-grid">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/diario/${post.slug}`}
                  className="link-focus"
                  style={{ display: "grid", gap: "0.85rem" }}
                >
                  <div className="media-frame" style={{ aspectRatio: "16 / 10" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.heroImage} alt={post.title} loading="lazy" />
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span className="eyebrow">{formatDate(post.publishedAt)}</span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="eyebrow">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2
                      className="display"
                      style={{ margin: "0.4rem 0", fontSize: "1.8rem" }}
                    >
                      {post.title}
                    </h2>
                    <p style={{ margin: 0, color: "var(--stone)", lineHeight: 1.65 }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
