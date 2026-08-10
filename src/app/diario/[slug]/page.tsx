import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedExpeditionsForPost,
} from "@/lib/content";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Diário" };
  return { title: post.title, description: post.excerpt };
}

export default async function DiaryPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedExpeditionsForPost(post);

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "65svh",
          display: "grid",
          alignItems: "end",
          color: "var(--snow)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src={post.heroImage}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6,20,29,0.25), rgba(6,20,29,0.88))",
            }}
          />
        </div>
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "3rem",
            paddingTop: "calc(var(--header-h) + 2rem)",
            maxWidth: "52rem",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            Diário · {formatDate(post.publishedAt)}
          </p>
          <h1
            className="display"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", maxWidth: "16ch" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "44rem" }}>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "var(--stone)",
              marginTop: 0,
            }}
          >
            {post.excerpt}
          </p>
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} style={{ lineHeight: 1.85, fontSize: "1.08rem" }}>
              {paragraph}
            </p>
          ))}
          <div style={{ marginTop: "2rem" }}>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Do texto à trilha</span>
              <h2 className="display">Expedições relacionadas</h2>
            </div>
            <div className="card-grid">
              {related.map((expedition) => (
                <ExpeditionCard key={expedition.slug} expedition={expedition} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
