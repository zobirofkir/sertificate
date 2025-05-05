import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "react-toastify";
import jsPDF from 'jspdf';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';

interface UserInfo {
  name: string;
  email: string;
  age: string;
}

interface HtmlExamResult {
  status: string;
  score: number;
}

const Index = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [htmlExamResult, setHtmlExamResult] = useState<HtmlExamResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Load user info and exam results from localStorage
    const storedUser = localStorage.getItem('userInfo');
    const storedExam = localStorage.getItem('htmlExamResult');

    if (storedUser) {
      try {
        setUserInfo(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing userInfo', e);
        toast.error("Could not load user information");
      }
    } else {
      // Demo data for testing
      setUserInfo({
        name: "John Doe",
        email: "john.doe@example.com",
        age: "28"
      });
    }

    if (storedExam) {
      try {
        setHtmlExamResult(JSON.parse(storedExam));
      } catch (e) {
        console.error('Error parsing htmlExamResult', e);
        toast.error("Could not load exam results");
      }
    } else {
      // Demo data for testing
      setHtmlExamResult({
        status: "passed",
        score: 8
      });
    }
  }, []);

  const handleDownloadCertificate = async () => {
    setIsGenerating(true);
    toast.info("Generating certificate, please wait...");

    try {
      // Create a new PDF document
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Set background color
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F');

      // Add decorative border
      pdf.setDrawColor(0, 86, 145);
      pdf.setLineWidth(5);
      pdf.rect(10, 10, pdf.internal.pageSize.getWidth() - 20, pdf.internal.pageSize.getHeight() - 20);

      // Add title
      pdf.setFontSize(32);
      pdf.setTextColor(0, 86, 145);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Certificate of Achievement', pdf.internal.pageSize.getWidth() / 2, 40, { align: 'center' });

      // Add subtitle
      pdf.setFontSize(16);
      pdf.setTextColor(100, 100, 100);
      pdf.setFont('helvetica', 'italic');
      pdf.text('This certificate is proudly presented to', pdf.internal.pageSize.getWidth() / 2, 60, { align: 'center' });

      // Add recipient name
      if (userInfo) {
        pdf.setFontSize(28);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'bold');
        pdf.text(userInfo.name.toUpperCase(), pdf.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
      }

      // Add decorative line
      pdf.setDrawColor(0, 86, 145);
      pdf.setLineWidth(1);
      pdf.line(50, 90, pdf.internal.pageSize.getWidth() - 50, 90);

      // Add description
      pdf.setFontSize(14);
      pdf.setTextColor(70, 70, 70);
      pdf.setFont('helvetica', 'normal');
      pdf.text('for successfully completing the HTML Proficiency Examination with distinction.', 
        pdf.internal.pageSize.getWidth() / 2, 110, { align: 'center' });

      // Add exam results
      if (htmlExamResult) {
        pdf.setFontSize(16);
        pdf.setTextColor(0, 86, 145);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Examination Results', pdf.internal.pageSize.getWidth() / 2, 130, { align: 'center' });

        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Status: ${htmlExamResult.status.charAt(0).toUpperCase() + htmlExamResult.status.slice(1)}`, 
          pdf.internal.pageSize.getWidth() / 2 - 40, 145);
        pdf.text(`Score: ${htmlExamResult.score}/10`, 
          pdf.internal.pageSize.getWidth() / 2 + 40, 145);
      }

      // Add date and signature
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Issued on: ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}`, 30, pdf.internal.pageSize.getHeight() - 30);

      pdf.text('Authorized Signature', pdf.internal.pageSize.getWidth() - 50, pdf.internal.pageSize.getHeight() - 30, { align: 'right' });

      // Save the PDF
      pdf.save('certificate.pdf');
      
      toast.success("Certificate downloaded successfully");
    } catch (error) {
      console.error('Error generating certificate PDF:', error);
      toast.error("Failed to generate certificate PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  const breadcrumbs: BreadcrumbItem[] = [
      {
          title: 'Dashboard',
          href: '/dashboard',
      },
  ];
  

  return (
  <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Certificate of Achievement" />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Certificate of Achievement</h1>
          <p className="text-gray-600 dark:text-gray-300">Your HTML proficiency certificate is ready to download</p>
        </div>

        <div className="flex justify-end mb-6">
          <Button
            onClick={handleDownloadCertificate}
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Certificate
              </>
            )}
          </Button>
        </div>

        <Card className="p-1 shadow-xl">
          <div
            id="certificate-section"
            className="relative bg-white border-8 border-gray-800 dark:bg-gray-800 dark:border-gray-600 p-12 space-y-8 w-full"
            style={{
              aspectRatio: "1.414/1",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700"></div>

            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 dark:text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-400 mb-4 font-serif tracking-wide">
                Certificate of Achievement
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto my-6 rounded-full"></div>

              <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-10">
                This certificate is proudly presented to
              </p>

              {userInfo && (
                <div className="mb-10">
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider font-serif">
                    {userInfo.name}
                  </p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-4"></div>
                </div>
              )}

              <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                for successfully completing the HTML Proficiency Examination with distinction.
              </p>

              {htmlExamResult && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto mb-10 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">Examination Results</h3>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300">Status</p>
                      <p className={`text-lg font-medium ${
                        htmlExamResult.status === 'rejected'
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {htmlExamResult.status.charAt(0).toUpperCase() + htmlExamResult.status.slice(1)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300">Score</p>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {htmlExamResult.score}/10
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div className="text-left">
                  <div className="h-16 w-48 border-b-2 border-gray-300 dark:border-gray-600"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Authorized Signature</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Issued on</p>
                  <p className="text-md font-medium text-gray-700 dark:text-gray-300">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </AppLayout>
  );
};

export default Index;