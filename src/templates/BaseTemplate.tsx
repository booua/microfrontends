/* eslint-disable react/no-unused-prop-types */
import { FiFilter, FiLogIn } from 'react-icons/fi';

import Button from '@/pages/components/Button';

import { MainHeaderTemplate } from './MainHeaderTemplate';

const BaseTemplate = (props: {
  leftNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-50 text-gray-700 antialiased">
      <MainHeaderTemplate
        title="Rocket scientists job board"
        subtitle="Blast off your career with rocket science."
      >
        <Button variant="primary" icon={<FiFilter />} iconPosition="left">
          Add a job offer
        </Button>
        <Button variant="primary" outline icon={<FiLogIn />}>
          Log in
        </Button>
      </MainHeaderTemplate>

      <main className="flex-1 ">{props.children}</main>
    </div>
  );
};

export { BaseTemplate };
