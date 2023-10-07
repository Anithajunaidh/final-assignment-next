import Image from 'next/image';
import images from '@/constants/images'

const MyLayout = () => {
  return (
    <div className="grid grid-cols-8 gap-4">
      {/* Column 1 */}
      <div className="col-span-4 row-span-3">
        <Image
          src={images.prayingMan}
          alt="Image 1"
          layout="responsive"
          width={450}
          height={1350}
        />
      </div>

      {/* Columns 2-5 */}
      <div className="col-span-2 row-span-3">
        <Image
          src={images.patientWithDoctor}
          alt="Image 2"
          layout="responsive"
          width={150}
          height={450}
        />
      </div>
      <div className="col-span-2 row-span-3">
        <Image
          src={images.doctorCaringWoman}
          alt="Image 3"
          layout="responsive"
          width={150}
          height={450}
        />
      </div>
      <div className="col-span-2 row-span-3">
        <Image
          src={images.seniorWomanSittingBedroom}
          alt="Image 4"
          layout="responsive"
          width={150}
          height={450}
        />
      </div>
      <div className="col-span-2 row-span-3">
        <Image
          src={images.joyfulOldLady}
          alt="Image 5"
          layout="responsive"
          width={150}
          height={450}
        />
      </div>

      {/* Column 6 */}
      <div className="col-span-4 row-span-3">
        <Image
          src={images.oldageHome}
          alt="Image 6"
          layout="responsive"
          width={450}
          height={1350}
        />
      </div>
    </div>
  );
};

export default MyLayout;
