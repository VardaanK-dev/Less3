// app/members/page.tsx
import "./members.css";
import Image from "next/image";
export default function MembersPage() {
  const members = [
    { name: "Hemendra", color: "red" },
    { name: "Jastina", color: "blue" },
    { name: "Vardaan", color: "green" },
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Meet Our Members</h1>
      <div className="cards">
        {members.map((m) => (
          <div key={m.name} className={`card ${m.color}`}>
            <Image
              src="/mem_placeholder.png"
              alt="Member Placeholder"
              width={250}
              height={200}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
            />
            <p className="tip">{m.name}</p>
            <p className="second-text">Member of Less³ group</p>
          </div>
        ))}
      </div>
    </main>
  );
}
