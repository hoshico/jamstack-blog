import { NextPage, NextPageContext } from 'next';
import Error from 'next/error';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return statusCode ? (
    <>
      <Error statusCode={statusCode}></Error>
    </>
  ) : (
    <p>An error occurred on client</p>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
