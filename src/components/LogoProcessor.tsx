import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalSrc: string;
  alt: string;
  className?: string;
}

const LogoProcessor = ({ originalSrc, alt, className }: LogoProcessorProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        // Load the original image
        const img = await loadImageFromUrl(originalSrc);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (err) {
        console.error('Failed to process logo:', err);
        setError('Failed to process logo');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke object URLs
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, [originalSrc]);

  if (error) {
    // Fallback to original image if processing fails
    return (
      <img 
        src={originalSrc} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedLogoUrl || originalSrc} 
      alt={alt} 
      className={`${className} ${isProcessing ? 'opacity-75' : ''}`}
      style={{
        filter: isProcessing ? 'blur(1px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    />
  );
};

export default LogoProcessor;