import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      if (confirm('로그인 후 사용 가능한 서비스 입니다.')) {
        router.push(`/login`);
      } else {
        router.push(`/`);
      }
    }
  }, []);
}
