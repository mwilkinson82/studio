import React from 'react';
import Image from 'next/image';

const AdvisoryLibraryCard = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '20px', 
      overflow: 'hidden' 
    }}>
      <Image 
        src="/File Folder.png" 
        alt="A|P Reports - File Folder"
        fill 
        style={{ objectFit: 'cover' }} 
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" // More specific sizes
        priority
      />
    </div>
  );
};

export default AdvisoryLibraryCard;
