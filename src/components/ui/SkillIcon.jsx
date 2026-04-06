import Image from "next/image";

export default function SkillIcon({ name, color, icons }) {
  const initials = name
    .split(/[\s.\/]/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-transparent flex-shrink-0">
      <Image
        src={icons}
        alt={initials}
        width={40}
        height={40}
        placeholder="blur"
        blurDataURL="data:image/..."
        className=" block"
      />
    </div>
  );
}
