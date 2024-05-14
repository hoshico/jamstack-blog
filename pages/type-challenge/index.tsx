import TypeChallengeIcon from '../../public/icons/typechallenge.svg';

const challengeList = ['Pick', 'Readonly', 'Tuple to Object', 'First of Array'];

const Typechallenge = () => {
  return (
    <div className="h-dvh bg-white">
      <div className="flex">
        <div className="mx-auto w-5/6">
          <TypeChallengeIcon />
        </div>
      </div>
      <div className="mt-6">
        <ul className="mx-auto flex w-5/6 gap-4">
          {challengeList.map((ele) => (
            <li key={ele}>
              <div className="fit-content">{ele}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Typechallenge;
