import StatsBadge from "./StatsBadge";

export default function StatsSection({ stats }) {
  return (
    <div className="flex flex-row gap-4 justify-center">
      <StatsBadge label="Characters" val={stats.characters} color="blue" />
      <StatsBadge label="Words" val={stats.words} color="violet" />
      <StatsBadge label="Sentences" val={stats.sentences} color="emerald" />
      <StatsBadge label="Paragraphs" val={stats.paragraphs} color="rose" />
      <StatsBadge label="Spaces" val={stats.spaces} color="lime" />
      <StatsBadge label="Reading Time" val={stats.readingTime} color="slate" />
    </div>
  );
}
