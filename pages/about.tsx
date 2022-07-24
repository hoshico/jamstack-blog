import { GetStaticProps } from 'next';
import { Profile } from '../components/types/Profile';
import { client } from '../libs/client';

type AboutProps = {
  profile: Profile;
};
export default function About({ profile }: AboutProps) {
  return (
    <div className="w-4/5 mt-6 p-10 mx-auto bg-base-300 rounded-md">
      <p className="text-center text-md font-bold">プロフィール</p>
      <div className="image-box relative w-20 mx-auto"></div>
      <div className="w-full mt-4">
        <p>名前: {profile.name}</p>
        <p className="mt-4">{profile.main}</p>
        <a
          href="https://qiita.com/yasu-hoshi"
          className="block mt-4 text-md hover:opacity-75">
          qiitaでも投稿してます。
        </a>
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const profile = await client.get({ endpoint: 'profile' });
  return {
    props: {
      profile: profile,
    },
  };
};
