import google from "./../images/google.svg";

export default function Login() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-white border-2 rounded-lg border-t-success p-8 mb-6'>
          <form className='md:w-96'>
            <div className='space-y-3'>
              <button
                type='button'
                className='w-full rounded-md border text-black hover:shadow-md transition py-3 font-bold flex items-center justify-center gap-2'>
                <span>
                  <img src={google} alt='google' />
                </span>
                Login with Google
              </button>
              <fieldset className='border-t border-slate-200'>
                <legend className='mx-auto px-4'>OR</legend>
              </fieldset>
              <h2 className='text-2xl font-bold text-black'>Sign In</h2>
              <div className=''>
                <label className='font-bold text-sm text-black'>
                  Email Address
                </label>
                <input
                  className='input mt-[5px] input-bordered w-full bg-white focus:outline-none'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='someone@example.com'
                />
              </div>
              <div className=''>
                <label className='font-bold text-sm text-black'>Password</label>
                <input
                  className='input mt-[5px] input-bordered bg-white w-full focus:outline-none'
                  type='password'
                  id='password'
                  name='password'
                  placeholder='password'
                />
              </div>
              <div className='relative !mt-8'>
                <button
                  type='submit'
                  className='w-full rounded-md bg-primary py-3 font-bold text-white'>
                  Sign In
                </button>
              </div>
              <div>
                <p className='text-center'>
                  Don&#39;t have an account?{" "}
                  <span className='cursor-pointer text-primary hover:text-[#333333] underline'>
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
