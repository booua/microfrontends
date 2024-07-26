// @ts-nocheck
import './global.css';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FiFilter } from 'react-icons/fi';

import Button from '@/pages/components/Button';
import Dropdown from '@/pages/components/Dropdown';
import ToggleButton from '@/pages/components/ToggleButton';
import { ToggleSwitch } from '@/pages/components/ToggleSwitch';
import { BaseTemplate } from '@/templates/BaseTemplate';

const RemoteMapComponent = dynamic(() => import('remote/MapComponent'));
const RemoteOffersList = dynamic(() => import('remote/OffersList'));

const Index = () => {
  return (
    <BaseTemplate>
      <div className="h-full pt-5 text-xl [&_p]:my-6">
        <div className="flex h-full grow">
          <main className=" grow overflow-y-auto px-5 pt-5 xl:w-1/2 2xl:w-3/5">
            <div className="h-full">
              <div className="mb-4 flex items-center justify-between gap-2">
                <input
                  type="text"
                  placeholder="Filter job offers"
                  className="min-h-10 w-2/5 rounded-xl border border-gray-300 p-1 text-sm"
                />
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    icon={<FiFilter />}
                    iconPosition="left"
                    className="text-nowrap"
                  >
                    Filter
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="primary" className="text-nowrap" outline>
                      Filter A
                    </Button>
                    <Button variant="primary" className="text-nowrap" outline>
                      Filter B
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <ToggleButton labels={['label1', 'label2', 'label3']} />
                </div>
                <div className="flex items-center space-x-4">
                  <ToggleSwitch label="$" id="usd" />
                  <Dropdown options={['Newest', 'Most fun', 'Most annoying']} />
                </div>
              </div>
              <Suspense fallback={<div>Loading offers...</div>}>
                <RemoteOffersList />
              </Suspense>
            </div>
          </main>
          <aside className="rounded-r-lg p-5 xl:w-1/2 2xl:w-2/5">
            <div className="flex h-full grow flex-col">
              <div className="mb-4 flex w-full items-center justify-between ">
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    icon={<FiFilter />}
                    iconPosition="left"
                    className="text-nowrap"
                  >
                    Location
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="primary" outline className="text-nowrap">
                      Fairy land
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-full grow overflow-hidden rounded-3xl border-2 border-blue-600">
                <Suspense fallback={<div>Loading map...</div>}>
                  <RemoteMapComponent />
                </Suspense>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Index;
