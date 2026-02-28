import type { GitHubRepo } from "@/types/Github";
import { GenericCard } from "@/components/shared/GenericCard";
import type { JSX } from "react";
import { VscGitCommit } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

function getTimeAgo(date: string): string {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return "Unknown";
  const diff = Date.now() - parsed.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

export const ReposCard = ({ repo }: { repo: GitHubRepo }): JSX.Element => (
  <GenericCard
    badge={{
      icon: <VscGitCommit size={16} />,
      label: repo?.name,
    }}
    headerTrailing={getTimeAgo(repo?.pushed_at)}
    title={repo.name}
    description={repo.description ?? undefined}
    meta={{
      label: repo.language ?? "Unknown",
    }}
    actions={[
      {
        href: repo.html_url,
        ariaLabel: `View ${repo?.name} on GitHub`,
        icon: <LuExternalLink size={18} />,
      },
    ]}
  />
);
