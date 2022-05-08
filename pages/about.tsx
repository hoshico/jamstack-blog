import Layout from "../components/Layout";
import { Profile } from "../components/types/Profile";

type AboutProps = {
  profile: Profile;
}
export default function About () {
  return (
    <Layout>
      <div className="w-4/5 mt-6 p-10 mx-auto bg-base-300 rounded-md">
        <p className="text-center text-md font-bold">プロフィール</p>
        <div className="w-full mt-4">
          <p>名前:hoshico</p>
          <p className="mt-4">日々の学習のメモを残していくブログです〜</p>
          <a href="https://qiita.com/yasu-hoshi" className="block mt-4 text-md hover:opacity-75">qiitaでも投稿してます</a>
        </div>
      </div>
    </Layout>
  )
};
