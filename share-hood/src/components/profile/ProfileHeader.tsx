"use client";

import React, {useState} from "react";
import Image from "next/image";

function ProfileHeader({name, email}: {name: string; email: string}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = imageError ? "/images/default-fallback.jpg" : "/images/Nipun.jpg";

  return (
    <div className="relative mt-6 flex flex-col items-center">
      <div className="relative h-20 w-20">
        <Image
          src={imageUrl}
          alt="Profile"
          layout="fill"
          className="rounded-full object-cover"
          onError={handleImageError}
        />
        <button className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-md">
          ✏️
        </button>
      </div>
      <h2 className="mt-3 text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}

export default ProfileHeader;
