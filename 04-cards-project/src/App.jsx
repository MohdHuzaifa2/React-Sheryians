import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=google.com",
      companyName: "Google",
      timePosted: "5 days ago",
      postName: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      hourlyRate: 85,
      location: "Mountain View, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=apple.com",
      companyName: "Apple",
      timePosted: "2 weeks ago",
      postName: "UI/UX Designer",
      tag1: "Full-time",
      tag2: "Mid Level",
      hourlyRate: 78,
      location: "Cupertino, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=meta.com",
      companyName: "Meta",
      timePosted: "3 days ago",
      postName: "React Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      hourlyRate: 90,
      location: "Menlo Park, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=amazon.com",
      companyName: "Amazon",
      timePosted: "1 week ago",
      postName: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      hourlyRate: 60,
      location: "Seattle, WA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=netflix.com",
      companyName: "Netflix",
      timePosted: "4 days ago",
      postName: "Product Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      hourlyRate: 95,
      location: "Los Gatos, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=microsoft.com",
      companyName: "Microsoft",
      timePosted: "6 days ago",
      postName: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      hourlyRate: 80,
      location: "Redmond, WA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=tesla.com",
      companyName: "Tesla",
      timePosted: "2 days ago",
      postName: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      hourlyRate: 88,
      location: "Palo Alto, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=nvidia.com",
      companyName: "NVIDIA",
      timePosted: "1 week ago",
      postName: "AI Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      hourlyRate: 100,
      location: "Santa Clara, CA"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?sz=64&domain=salesforce.com",
      companyName: "Salesforce",
      timePosted: "3 weeks ago",
      postName: "Cloud Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      hourlyRate: 82,
      location: "San Francisco, CA"
    },
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(({ brandLogo, companyName, timePosted, postName, tag1, tag2, hourlyRate, location }, index) => {
        return <Card key={index} img={brandLogo} company={companyName} time={timePosted} post={postName} tag1={tag1} tag2={tag2} pay={hourlyRate} location={location} />
      })}
    </div>
  )
}

export default App