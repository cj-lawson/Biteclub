'use client';

import Link from 'next/link';
import { sendResetPasswordEmail } from '../actions';
import { useActionState } from 'react';

export default function ForgotPassword() {
  const [state, formAction, isPending] = useActionState(
    sendResetPasswordEmail,
    {
      error: '',
      success: '',
    },
  );

  const { error, success } = state;

  console.log(state);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <h1 className="font-semibold text-xl">Forgot password?</h1>
        <p>No worries, we'll send you email instructions</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={formAction} method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send email instructions
          </button>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Back to log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}