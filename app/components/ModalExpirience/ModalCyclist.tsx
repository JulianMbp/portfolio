'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import Image from 'next/image';
import LogoNTC from '../../../public/img/LogoNTC.png';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalExp: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-60' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 flex items-center gap-1 text-gray-900'
                >
                  <Image
                    src={LogoNTC}
                    alt='Nariño Tierra de Ciclistas'
                    className='h-12 w-28'
                  />
                  <dl className='pl-2'>
                    <p className='text-xl text-justify'>Nariño Tierra de Ciclistas </p>
                    <p className='text-lg opacity-60 text-gray-950'>{title}</p>
                  </dl>
                </Dialog.Title>
                <div className='mt-4 text-left'>{children}</div>
                <div className='mt-4 text-left'>
                  <button
                    type='button'
                    className=' inline-flex justify-center rounded-md border bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalExp;
