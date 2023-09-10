import React from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component

const teamMembers = [
  {
    title: 'Jameer Manur Sir',
    imgUrl: 'https://c4.wallpaperflare.com/wallpaper/720/249/311/nature-sky-sun-clouds-wallpaper-preview.jpg', // Replace with actual image URLs
    tech: ['Role: Mentor and Founder', 'Institute: IUCAA'],
    workUrl: 'https://www.linkedin.com/in/jameer-manur-311222a3/',
  },
  {
    title: 'Prof. Dr. Shital Pawar Madam',
    imgUrl: 'https://i.pinimg.com/originals/65/b7/e8/65b7e8d827322e4094f9c4d823c3dfd7.gif', // Replace with actual image URLs
    tech: ['Role: Faculty Advisor', 'Institute: VIT, Pune'],
    workUrl: 'https://www.linkedin.com/in/dr-shital-raut-b05591104/',
  },
  {
    title: 'Prof. Milind Patil Sir',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7klHN_SWR5L2pWnT08rxtitqMyC674o2FZoTMjWQk5vSL2JBatL4m28as6GZVOEmqkuI&usqp=CAU', // Replace with actual image URLs
    tech: ['Role: Faculty Advisor', 'Institute: VIIT, Pune'],
    workUrl: 'https://www.linkedin.com/in/milind-patil-301992b4/',
  },
  {
    title: 'Sahil Sawant',
    imgUrl: 'https://free4kwallpapers.com/uploads/originals/2021/09/30/koi-moon-wallpaper.jpg', // Replace with actual image URLs
    tech: ['Role: President', 'Edu: T.Y.B.Tech EnTC'],
    workUrl: 'https://samael.vercel.app/',
  },
    {
    title: 'Chanchal Rathad',
    imgUrl: 'https://wallpaperaccess.com/full/19677.jpg', // Replace with actual image URLs
    tech: ['Role: President', 'Edu: T.Y.B.Tech IT'],
    workUrl: 'https://www.linkedin.com/in/chanchal-rathad-60b876229/',
  },
    {
    title: 'Bhavya Shah',
    imgUrl: 'https://imageio.forbes.com/specials-images/imageserve/648792456/Neptune/960x0.jpg?format=jpg&width=960', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: T.Y.B.Tech CS'],
    workUrl: 'https://www.linkedin.com/in/bhavya-shah-9401a7233/',
  },
    {
    title: 'Anas Ansari',
    imgUrl: 'https://c4.wallpaperflare.com/wallpaper/698/20/1008/ring-uranus-planet-blue-planet-wallpaper-preview.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: B.Tech CS'],
    workUrl: 'https://www.linkedin.com/in/ansari-anas/',
  },
    {
    title: 'Harsh Jalnekar',
    imgUrl: 'https://images.hdqwalls.com/wallpapers/jupiter-4k-n5.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: B.Tech EnTC'],
    workUrl: 'https://www.linkedin.com/in/harsh-jalnekar-458b70205/',
  },
  {
    title: 'Sumitkumar Chandanshive',
    imgUrl: 'https://cdn.wallpapersafari.com/4/94/h2mW0J.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: T.Y.B.Tech EnTC'],
    workUrl: 'https://www.linkedin.com/in/sumitkumar-chandanshive-7b8197231/',
  },
  {
    title: 'Shreya Channawar',
    imgUrl: 'https://wallpaperaccess.com/full/116941.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: T.Y.B.Tech Mech'],
    workUrl: 'https://example.com/jane-smith-profile',
  },
  {
    title: 'Aditya Bhoite',
    imgUrl: 'https://images.hdqwalls.com/wallpapers/planet-space-mars-4k-8l.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: B.Tech Instru.'],
    workUrl: 'https://example.com/jane-smith-profile',
  },
  {
    title: 'Sarthak Pithe',
    imgUrl: 'https://wallpapers.com/images/featured/mercury-e7qxs71eut3kh4em.jpg', // Replace with actual image URLs
    tech: ['Role: Core Member', 'Edu: S.Y.B.Tech CS'],
    workUrl: 'https://example.com/jane-smith-profile',
  },
  // Add more team members here
];

function CurrentTeam() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500">Current Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            title={member.title}
            imgUrl={member.imgUrl}
            tech={member.tech}
            workUrl={member.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentTeam;
