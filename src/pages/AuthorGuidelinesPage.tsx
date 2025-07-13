import React from 'react';
import { FileText, Upload, CheckCircle, Clock, AlertCircle, Download, BookOpen, Users } from 'lucide-react';

const AuthorGuidelinesPage: React.FC = () => {
  const submissionTypes = [
    {
      title: "Abstract Only",
      description: "Submit a detailed abstract for presentation consideration",
      icon: <FileText className="h-8 w-8 text-emerald-600" />,
      wordLimit: "300-500 words",
      deadline: "September 1, 2025",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Full Paper",
      description: "Submit a complete research paper for publication",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      wordLimit: "4000-8000 words",
      deadline: "October 1, 2025",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Poster Presentation",
      description: "Present your research in poster format",
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      wordLimit: "250-400 words",
      deadline: "September 15, 2025",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const formatRequirements = [
    {
      aspect: "Font & Size",
      requirement: "Times New Roman, 12pt",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    },
    {
      aspect: "Line Spacing",
      requirement: "Double-spaced throughout",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    },
    {
      aspect: "Margins",
      requirement: "1 inch (2.54 cm) on all sides",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    },
    {
      aspect: "Page Numbers",
      requirement: "Bottom right corner",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    },
    {
      aspect: "File Format",
      requirement: "Microsoft Word (.docx) or PDF",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    },
    {
      aspect: "Language",
      requirement: "English (US or UK spelling)",
      icon: <FileText className="h-5 w-5 text-emerald-600" />
    }
  ];

  const reviewProcess = [
    {
      step: "1",
      title: "Initial Review",
      description: "Technical compliance and formatting check",
      duration: "3-5 days",
      icon: <CheckCircle className="h-6 w-6 text-emerald-600" />
    },
    {
      step: "2",
      title: "Peer Review",
      description: "Expert evaluation of content and methodology",
      duration: "2-3 weeks",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      step: "3",
      title: "Editorial Decision",
      description: "Final acceptance or revision recommendations",
      duration: "1 week",
      icon: <BookOpen className="h-6 w-6 text-purple-600" />
    },
    {
      step: "4",
      title: "Publication",
      description: "Final publication in conference proceedings",
      duration: "Post-conference",
      icon: <Download className="h-6 w-6 text-teal-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
            alt="Author Guidelines Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Author Guidelines</h1>
            <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto">
              Comprehensive guidelines for submitting abstracts and papers to the Environment and Changing Climate Conference 2025
            </p>
          </div>
        </div>
      </section>

      {/* Submission Types */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Submission Types</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the appropriate submission type for your research contribution
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {submissionTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${type.color} p-4 rounded-full w-fit mx-auto mb-6`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                <p className="text-gray-600 text-center mb-6">{type.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Word Limit:</span>
                    <span className="text-sm text-emerald-600 font-semibold">{type.wordLimit}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Deadline:</span>
                    <span className="text-sm text-red-600 font-semibold">{type.deadline}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Submit {type.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatting Requirements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Formatting Requirements</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure your submission meets all technical and formatting standards
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {formatRequirements.map((req, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                <div className="flex items-center mb-4">
                  {req.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{req.aspect}</h3>
                </div>
                <p className="text-gray-700 font-medium">{req.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Structure */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Abstract Structure</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this structure to ensure your abstract meets academic standards
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Title</h3>
                  <p className="text-gray-600">Concise, descriptive title (maximum 20 words). Should clearly indicate the research focus and key findings.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Authors & Affiliations</h3>
                  <p className="text-gray-600">List all authors with their institutional affiliations, email addresses, and indicate the corresponding author.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Background</h3>
                  <p className="text-gray-600">Brief context and problem statement (2-3 sentences). Explain the significance of your research.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Methods</h3>
                  <p className="text-gray-600">Concise description of methodology, study design, and data collection approaches used.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Results</h3>
                  <p className="text-gray-600">Key findings and outcomes. Include quantitative results where applicable.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">6. Conclusions</h3>
                  <p className="text-gray-600">Implications of findings and relevance to climate change mitigation/adaptation.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">7. Keywords</h3>
                  <p className="text-gray-600">3-5 keywords relevant to your research topic, separated by semicolons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Review Process</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the review timeline and process for your submission
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-300 to-teal-300 hidden md:block"></div>
            
            <div className="space-y-12">
              {reviewProcess.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
                      <div className="flex items-center mb-4">
                        {step.icon}
                        <h3 className="text-xl font-bold text-gray-900 ml-3">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center text-sm text-emerald-600 font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="bg-emerald-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Important Notes</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Submission Deadlines</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• All submissions must be received by 11:59 PM (Bangladesh Standard Time)</li>
                <li>• Late submissions will not be considered</li>
                <li>• Early submission is encouraged for technical support</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Acceptance Criteria</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Originality and scientific merit</li>
                <li>• Relevance to conference themes</li>
                <li>• Methodological soundness</li>
                <li>• Clear presentation and writing quality</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Plagiarism Policy</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• All submissions will be checked for plagiarism</li>
                <li>• Similarity index must be below 20%</li>
                <li>• Proper citations and references required</li>
                <li>• Self-plagiarism is also not acceptable</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Download className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Templates & Resources</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Download official templates from our website</li>
                <li>• Use provided reference style guide</li>
                <li>• Contact support for technical assistance</li>
                <li>• Sample abstracts available for reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Submit?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Follow these guidelines to ensure your submission meets all requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Download Template
            </button>
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              Submit Your Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorGuidelinesPage; 