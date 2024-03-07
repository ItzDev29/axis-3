"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
export default function Page() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
 const token= searchParams.get('token') 
  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (token) {
          const response = await fetch('/api/verify-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token':token
            },
           
          });
          if (response.status === 200) {
            setVerified(true);
          }
        }
      } catch (error) {
        console.error('Error verifying token:', error);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  if(verified){
    router.push("/")
  }

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="text-center">
          <p className="text-lg font-semibold">Verifying...</p>

        </div>
      ) : (
        <div className="text-center">
          {verified ? (
            <p className="text-lg font-semibold text-green-600">Account Verified.Redirecting</p>
          ) : (
            <p className="text-lg font-semibold text-red-600">Invalid token!</p>
          )}
        </div>
      )}
    </div>
    </>
  );
}
