import { useRouter } from 'next/router';

export function useGoBack() {
  const {back} = useRouter();
  return back;
}
