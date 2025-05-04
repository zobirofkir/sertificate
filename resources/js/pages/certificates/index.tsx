import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface UserInfo {
  name: string
  email: string
  age: string
}

interface HtmlExamResult {
  status: string
  score: number
}

const Index = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User Info', href: '/user' },
  ]

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [htmlExamResult, setHtmlExamResult] = useState<HtmlExamResult | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo')
    const storedExam = localStorage.getItem('htmlExamResult')

    if (storedUser) {
      try {
        setUserInfo(JSON.parse(storedUser))
      } catch (e) {
        console.error('Error parsing userInfo', e)
      }
    }

    if (storedExam) {
      try {
        setHtmlExamResult(JSON.parse(storedExam))
      } catch (e) {
        console.error('Error parsing htmlExamResult', e)
      }
    }
  }, [])

  const handleDownloadCertificate = async () => {
    const element = document.getElementById('certificate-section')
    if (!element) return

    const canvas = await html2canvas(element)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()

    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('certificate.pdf')
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="User Info & HTML Exam" />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <div className="flex justify-end">
          <button
            onClick={handleDownloadCertificate}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            📄 Download Certificate
          </button>
        </div>

        <div
          id="certificate-section"
          className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-yellow-500 p-10 space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-yellow-600 dark:text-yellow-400">
            Certificate of Achievement
          </h1>
          <p className="text-center text-gray-800 dark:text-gray-200 text-lg">
            This is to certify that
          </p>

          {userInfo && (
            <p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
              {userInfo.name}
            </p>
          )}

          <p className="text-center text-gray-700 dark:text-gray-300">
            has successfully completed the HTML Exam.
          </p>

          {htmlExamResult && (
            <div className="text-center space-y-2 text-gray-800 dark:text-gray-200">
              <p>
                <strong>Status:</strong>{' '}
                <span
                  className={
                    htmlExamResult.status === 'rejected'
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-green-600 dark:text-green-400'
                  }
                >
                  {htmlExamResult.status}
                </span>
              </p>
              <p>
                <strong>Score:</strong> {htmlExamResult.score}/10
              </p>
            </div>
          )}

          <div className="text-right text-sm text-gray-400 mt-10">
            Generated on: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Index
