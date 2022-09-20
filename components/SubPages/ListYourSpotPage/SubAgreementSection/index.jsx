import { useField } from 'formik';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const SubAgreementSection = () => {
  const [termsField, {}, termsHelpers] = useField('terms');
  const [licenseField, {}, licenseHelpers] = useField('license');

  return (
    <div className="min-h-[200px] text-primary">
      <h2 className="mb-5 font-trade-gothic-bold text-2xl">
        Do you agree with this agreement?
      </h2>
      <h1 className="mb-8 font-trade-gothic-bold text-5xl"></h1>

      <div
        className={'my-2 flex cursor-pointer items-center gap-3'}
        onClick={() => termsHelpers.setValue(!termsField.value)}
      >
        <div
          className={`flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden border-2 border-yellow-500 transition-all duration-300 ${
            termsField.value === true ? 'bg-yellow-500' : 'bg-white'
          }`}
        >
          <FaCheck className={'inline text-xs text-white'} />
        </div>
        <p
          className={`font-trade gothic-bold transition-all duration-300 ${
            termsField.value == true ? 'text-gray-900' : ''
          }`}
        >
          I have read and agree with the
          <Link href={'/terms-of-use'}>
            <a target={'_blank'}>
              <span className={'ml-1 cursor-pointer text-blue-400 underline'}>
                Terms and Conditions.
              </span>
            </a>
          </Link>
        </p>
      </div>

      {!termsField.value ? (
        <div className="mt-2 text-sm text-red-500">
          Please agree by clicking on the box
        </div>
      ) : null}

      <div
        className={'my-2 flex cursor-pointer items-center gap-3'}
        onClick={() => licenseHelpers.setValue(!licenseField.value)}
      >
        <div
          className={`flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden border-2 border-yellow-500 transition-all duration-300 ${
            licenseField.value === true ? 'bg-yellow-500' : 'bg-white'
          }`}
        >
          <FaCheck className={'inline text-xs text-white'} />
        </div>
        <p
          className={`font-trade gothic-bold transition-all duration-300 ${
            licenseField.value == true ? 'text-gray-900' : ''
          }`}
        >
          I have read and agree with the
          <Link href={'/license-agreement'}>
            <a target={'_blank'}>
              <span className={'ml-1 cursor-pointer text-blue-400 underline'}>
                License Agreement.
              </span>
            </a>
          </Link>
        </p>
      </div>

      {!licenseField.value ? (
        <div className="mt-2 text-sm text-red-500">
          Please agree by clicking on the box!
        </div>
      ) : null}
    </div>
  );
};

export default SubAgreementSection;
