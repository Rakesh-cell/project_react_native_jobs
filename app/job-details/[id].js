import { View, Text,SafeAreaView,ScrollView,ActivityIndicator,RefreshControl,Share} from 'react-native'
import React ,{useCallback,useState}from 'react'
import { Stack,useRouter,useLocalSearchParams } from 'expo-router'

import { COLORS,icons,SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

const tabs=['About','Qualifications','Responsibilities']
const JobDetails = () => {
    const params=useLocalSearchParams()
    const router = useRouter();

    const {data,isLoading,error,refetch }=useFetch('job-details',{
        job_id:params.id
    })

    const dummydata =  [
          {
            "employer_name": "TEKsystems",
            "employer_logo": "https://www.teksystems.com/-/media/teksystems/images/logos/teksystems-logo.svg?iar=0&rev=7059329eede9499a9965f7b1d91cc97f",
            "employer_website": "http://www.teksystems.com",
            "employer_company_type": "Staffing",
            "job_publisher": "TEKsystems Careers",
            "job_id": "iXki4pXSSRwAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Python Developer (W2)",
            "job_apply_link": "https://careers.teksystems.com/us/en/job/JP-003793389/Python-Developer-W2",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.9674,
            "job_description": "Description:\n\nPython Developer in Houston Texas. W2 only. Contract. Hybrid.\n\nSkills:\n\nPython, React, Linux, Unix, API\n\nAdditional Skills & Qualifications:\n\nRequired Skills-\n\n• Strong development experience using Python, REST API Service\n\n• 3+ years of extensive experience working as a full stack React JS developer (familiarity with redux a plus)\n\n• Database development skills, experience with Object-oriented and Relational databases - SQL Server/Oracle/Sybase.\n\n• Experience developing software using Agile methodology.\n\n• Knowledge of JIRA tools and Continuous Integration capabilities.\n\n• Familiarity with web services, web sockets and microservice based architecture is a plus\n\n• Hands on experience in writing unit and UI integration test cases.\n\nExperience Level:\n\nIntermediate Level\n\nAbout TEKsystems:\n\nWe're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company.\n\nThe company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law.",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1684773292,
            "job_posted_at_datetime_utc": "2023-05-22T16:34:52.000Z",
            "job_city": "Houston",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.760427,
            "job_longitude": -95.369804,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&q=iXki4pXSSRwAAAAAAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=iXki4pXSSRwAAAAAAAAAAA%3D%3D&htidocid=iXki4pXSSRwAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": null,
            "job_offer_expiration_timestamp": null,
            "job_required_experience": {
              "no_experience_required": false,
              "required_experience_in_months": 36,
              "experience_mentioned": true,
              "experience_preferred": true
            },
            "job_required_skills": [
              "Python",
              "Redux",
              "ui integration",
              "REST API",
              "UI",
              "Jira",
              "Full Stack",
              "Linux",
              "SQL Server",
              "Agile Methodology",
              "Unix",
              "React",
              "Oracle",
              "Continuous Integration",
              "jira tools",
              "Integration",
              "Database Development",
              "Sybase",
              "Architecture",
              "Web Services",
              "Technology Services",
              "Transformation",
              "Writing",
              "Development",
              "Senior Developer & Software Engineer .Net & Full Stack Developer & Full Stack Software Engineer .Net",
              ".Net Developer & Full Stack Developer & Full Stack Application Developer & .Net Software Engineer",
              "Big Data Developer & Java Developer",
              "Senior Software Developer - Java",
              "Swiggy Full Stack Developer - SDE I",
              "Java Developer & Software Engineer",
              "Python Developer",
              "Big Data Developer &  Full Stack Developer",
              "Senior Software Engineer - Java",
              "Python",
              "Sql Relational Database",
              "Senior Software Developer - Java & J2ee & UI Developer"
            ],
            "job_required_education": {
              "postgraduate_degree": false,
              "professional_certification": false,
              "high_school": false,
              "associates_degree": false,
              "bachelors_degree": false,
              "degree_mentioned": false,
              "degree_preferred": false,
              "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
              "Qualifications": [
                "Python, React, Linux, Unix, API",
                "Strong development experience using Python, REST API Service",
                "Database development skills, experience with Object-oriented and Relational databases - SQL Server/Oracle/Sybase",
                "Experience developing software using Agile methodology",
                "Knowledge of JIRA tools and Continuous Integration capabilities",
                "Hands on experience in writing unit and UI integration test cases"
              ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113200",
            "job_onet_job_zone": "4",
            "job_occupational_categories": [
              "Developer"
            ],
            "job_naics_code": "561311",
            "job_naics_name": "Employment Placement Agencies",
            "estimated_salaries": [],
            "apply_options": [],
            "employer_reviews": [
              {
                "publisher": "Glassdoor",
                "employer_name": "TEKsystems",
                "score": 4,
                "num_stars": 4,
                "review_count": 10056,
                "max_score": 5,
                "reviews_link": "https://www.glassdoor.com/Reviews/TEKsystems-Reviews-E23297.htm?utm_campaign=google_jobs_reviews&utm_source=google_jobs_reviews&utm_medium=organic"
              },
              {
                "publisher": "Indeed",
                "employer_name": "TEKsystems",
                "score": 3.8,
                "num_stars": 4,
                "review_count": 4118,
                "max_score": 5,
                "reviews_link": "https://www.indeed.com/cmp/TEKsystems/reviews?utm_campaign=google_jobs_reviews&utm_source=google_jobs_reviews&utm_medium=organic"
              },
              {
                "publisher": "CareerBliss",
                "employer_name": "TEKsystems",
                "score": 3.9,
                "num_stars": 4,
                "review_count": 405,
                "max_score": 5,
                "reviews_link": "https://www.careerbliss.com/teksystems/reviews/?utm_campaign=google_jobs_reviews&utm_source=google_jobs_reviews&utm_medium=organic"
              }
            ]
          }
        ]

    const [refreshing,setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const onRefresh = useCallback(() =>{
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    },[])
    const displayTabContnent = () =>{
        switch (activeTab) {
            case 'Qualifications':
                    return <Specifics
                        title='Qualifications'
                        points={data[0].job_highlights?.Qualifications??['N/A']}
                        />
            case 'Responsibilities':
                return <Specifics
                        title='Responsibilities'
                        points={data[0].job_highlights?.Responsibilities??['N/A']}
                        />
            case 'About':
                return <JobAbout 
                        info={data[0].job_description??'No Data Provided'}
                />
        
            default:
                break;
        }
    }
    const onshare=async()=>{
      try {
        let jobLink=data[0]?.job_google_link?data[0]?.job_google_link:'https://careers.google.com/jobs/results'
        const result = await Share.share({
          message:`${data[0].job_title} , ${jobLink}`,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerBackVisible: false,
                headerTitleAlign: 'center',
                headerLeft:()=>(
                    <ScreenHeaderBtn 
                    iconUrl={icons.left}
                    dimention='60%'
                    handlePress={()=>router.back()}
                    />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn 
                    iconUrl={icons.share}
                    dimention='60%'
                    handlePress={()=>onshare()}
                    />
                ),
                headerTitle:""
            }}
        />

            <>
            <ScrollView  showsVerticalScrollIndicator={false} 
            refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>} 
            >
                {isLoading?(<ActivityIndicator size="large" color={COLORS.primary}/>
                ):error?(<Text>Something Went Wrong</Text> 
                ):  data.length===0?(<Text>No Data</Text>
                ):
                <View style={{padding:SIZES.medium,paddingBottom:100}}>
                    <Company
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyName={data[0].employer_name}
                        Location={data[0].job_country}

                    />
                    <JobTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                    />
                    {displayTabContnent()}

                </View>

                }

            </ScrollView>
            <JobFooter url={data[0]?.job_google_link??'https://careers.google.com/jobs/results'}/>
            </>

    </SafeAreaView>
  )
}

export default JobDetails