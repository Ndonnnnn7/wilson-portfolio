import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiR,
} from '@icons-pack/react-simple-icons'
import type { ComponentType } from 'react'
import CLogo from '../../components/c-logo'
import TableauIcon from './tableau-icon'

type TechnologyIcon = ComponentType<{ size?: number | string; color?: string }>
export type TechnologyKey = 'python' | 'tableau' | 'mysql' | 'r' | 'c' | 'html' | 'css' | 'javascript'

export type ProjectDetails = {
  summary: string
  background: string
  objective: string
  dataInput: string[]
  methodology: string[]
  results: string[]
}

export type Project = {
  title: string
  category: string
  year: string
  tags: string[]
  images: string[]
  technologies: TechnologyKey[]
  repositoryUrl?: string
  details: ProjectDetails
}

export const technologyLogos: Record<TechnologyKey, { name: string; Icon: TechnologyIcon; color: string }> = {
  python: { name: 'Python', Icon: SiPython, color: '#3776ab' },
  tableau: { name: 'Tableau', Icon: TableauIcon, color: '#e97627' },
  mysql: { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
  r: { name: 'R', Icon: SiR, color: '#276dc3' },
  c: { name: 'C', Icon: CLogo, color: '#659ad2' },
  html: { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
  css: { name: 'CSS', Icon: SiCss, color: '#1572b6' },
  javascript: { name: 'JavaScript', Icon: SiJavascript, color: '#b89b00' },
}

const wilsonGithub = 'https://github.com/wilsongregory15'

// Add another card by copying this object and replacing its content.
export const projects: Project[] = [
  {
    title: 'Customer Churn Intelligence',
    category: 'Data Science',
    year: '2026',
    tags: ['Python', 'Pandas', 'Tableau'],
    // public/Porto1.png becomes '/Porto1.png' here.
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python', 'tableau', 'mysql'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A predictive analytics system for understanding churn risk and supporting targeted customer retention.',
      background: 'Subscription businesses need to understand why valuable customers leave before those relationships are lost. Raw behavioral and billing data can reveal warning signals, but the patterns are difficult to interpret without a focused analytical workflow.',
      objective: 'Build a clear churn-risk system that identifies customers who may leave, explains the strongest risk factors, and turns model predictions into practical retention actions.',
      dataInput: [
        'Customer profile and demographic attributes',
        'Subscription, contract, and billing history',
        'Product usage and support interaction records',
      ],
      methodology: [
        'Clean and validate customer records',
        'Explore behavioral patterns and churn drivers',
        'Train and evaluate classification models',
        'Translate model output into dashboard insights',
      ],
      results: [
        'Identified customer groups with the highest churn risk',
        'Surfaced the strongest behavioral risk factors',
        'Created actionable retention recommendations',
      ],
    },
  },
  {
    title: 'Sales Forecast Studio',
    category: 'Predictive Analytics',
    year: '2026',
    tags: ['Forecasting', 'Python', 'MySQL'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['python', 'mysql', 'r'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A forecasting workspace that turns historical sales into practical planning signals.',
      background: 'Sales teams often plan inventory and targets using fragmented spreadsheets and intuition. Historical transactions contain seasonal patterns and growth signals that can make those decisions more dependable.',
      objective: 'Forecast upcoming sales periods and present uncertainty in a format that supports inventory, staffing, and revenue planning.',
      dataInput: ['Historical transaction records', 'Product and regional sales attributes', 'Calendar and seasonal indicators'],
      methodology: ['Validate and aggregate sales history', 'Identify trend and seasonal components', 'Compare forecasting models', 'Present forecasts and confidence ranges'],
      results: ['Produced forward-looking sales estimates', 'Highlighted seasonal demand changes', 'Improved visibility for planning decisions'],
    },
  },
  {
    title: 'Market Basket Explorer',
    category: 'Data Mining',
    year: '2026',
    tags: ['Apriori', 'Pandas', 'Tableau'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['html'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'An association-analysis tool for discovering products that customers frequently purchase together.',
      background: 'Transaction logs contain valuable relationships between products, but those combinations are difficult to recognize by reviewing individual orders.',
      objective: 'Reveal meaningful product associations that can support bundling, placement, and cross-selling strategies.',
      dataInput: ['Customer transaction baskets', 'Product identifiers and categories', 'Order frequency and quantity data'],
      methodology: ['Transform orders into basket format', 'Calculate item support and confidence', 'Apply association-rule mining', 'Visualize the strongest product relationships'],
      results: ['Discovered recurring product combinations', 'Prioritized high-confidence bundle opportunities', 'Created an explorable association dashboard'],
    },
  },
  {
    title: 'Sentiment Pulse',
    category: 'Natural Language Processing',
    year: '2026',
    tags: ['NLP', 'Python', 'Visualization'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['python', 'javascript', 'mysql'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A text-analysis dashboard that tracks customer sentiment and recurring conversation themes.',
      background: 'Large volumes of reviews and comments make it difficult for teams to understand how customers feel and which issues deserve immediate attention.',
      objective: 'Classify sentiment, surface repeated themes, and make changes in customer opinion easy to monitor.',
      dataInput: ['Customer reviews and feedback text', 'Submission dates and source channels', 'Product or service categories'],
      methodology: ['Clean and normalize text data', 'Extract keywords and language features', 'Classify sentiment polarity', 'Visualize trends and recurring topics'],
      results: ['Measured positive and negative sentiment', 'Identified frequently discussed themes', 'Created a clear feedback-monitoring view'],
    },
  },
  {
    title: 'Student Success Predictor',
    category: 'Machine Learning',
    year: '2025',
    tags: ['Classification', 'Pandas', 'Tableau'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python', 'r', 'mysql'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A classification project for identifying students who may benefit from earlier academic support.',
      background: 'Academic difficulties often become visible only after final outcomes are recorded. Attendance, assessment, and engagement data can provide earlier signals.',
      objective: 'Estimate student success risk and explain the academic factors that contribute most strongly to each prediction.',
      dataInput: ['Attendance and engagement records', 'Assessment and assignment scores', 'Course and student profile attributes'],
      methodology: ['Audit and prepare academic records', 'Explore success and risk patterns', 'Train classification models', 'Evaluate fairness and predictive quality'],
      results: ['Detected early academic risk indicators', 'Compared model performance transparently', 'Supported more targeted student interventions'],
    },
  },
  {
    title: 'Fraud Signal Monitor',
    category: 'Risk Analytics',
    year: '2025',
    tags: ['Anomaly Detection', 'Python', 'SQL'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['python', 'mysql', 'c'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A risk-monitoring system for detecting unusual transaction behavior and prioritizing investigations.',
      background: 'Fraudulent activity can be hidden within large streams of legitimate transactions. Manual review is slow and makes subtle behavioral anomalies easy to miss.',
      objective: 'Detect suspicious transaction patterns, score their relative risk, and give analysts a focused investigation queue.',
      dataInput: ['Transaction amounts and timestamps', 'Account and merchant attributes', 'Historical fraud labels and behavior'],
      methodology: ['Validate transaction records', 'Engineer behavioral risk indicators', 'Train anomaly and classification models', 'Rank and visualize suspicious activity'],
      results: ['Flagged high-risk transaction patterns', 'Reduced the volume requiring manual review', 'Created explainable signals for investigators'],
    },
  },
  {
    title: 'Customer Segmentation Lab',
    category: 'Machine Learning',
    year: '2025',
    tags: ['Clustering', 'Python', 'Tableau'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python', 'r', 'tableau'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A clustering study that groups customers by meaningful behavioral and value patterns.',
      background: 'Treating every customer the same can hide important differences in engagement, purchasing habits, and long-term value.',
      objective: 'Build understandable customer segments that support more relevant communication and service strategies.',
      dataInput: ['Purchase frequency and monetary value', 'Engagement and recency measures', 'Customer profile attributes'],
      methodology: ['Prepare and scale customer features', 'Explore behavioral distributions', 'Compare clustering solutions', 'Profile and name each segment'],
      results: ['Created distinct behavioral segments', 'Explained the value of each group', 'Enabled more focused customer strategies'],
    },
  },
  {
    title: 'Inventory Demand Planner',
    category: 'Business Intelligence',
    year: '2025',
    tags: ['Time Series', 'MySQL', 'Tableau'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['python', 'mysql', 'tableau'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A demand-planning dashboard designed to reduce stock uncertainty across products and periods.',
      background: 'Inventory decisions must balance product availability with the cost of excess stock. Demand varies across products, locations, and seasons.',
      objective: 'Estimate future product demand and highlight items with the greatest shortage or overstock risk.',
      dataInput: ['Historical product demand', 'Current inventory and reorder levels', 'Seasonal and promotional calendars'],
      methodology: ['Consolidate inventory history', 'Measure demand variability', 'Forecast product-level demand', 'Visualize stock risk and reorder priorities'],
      results: ['Identified likely stock pressure points', 'Supported clearer reorder decisions', 'Improved product-level demand visibility'],
    },
  },
  {
    title: 'Campaign Analytics Hub',
    category: 'Marketing Analytics',
    year: '2025',
    tags: ['Attribution', 'Pandas', 'Dashboard'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['tableau', 'mysql', 'python'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A unified marketing dashboard for comparing campaign reach, conversion, and efficiency.',
      background: 'Campaign data is often split across platforms, making it difficult to compare performance or understand which channels contribute to conversion.',
      objective: 'Combine campaign performance into one view and clarify which audiences, channels, and messages create the most value.',
      dataInput: ['Campaign impressions and clicks', 'Conversion and revenue events', 'Channel, audience, and creative attributes'],
      methodology: ['Standardize cross-channel metrics', 'Connect campaign and conversion data', 'Calculate efficiency indicators', 'Build comparative campaign views'],
      results: ['Unified fragmented campaign reporting', 'Highlighted efficient channels and audiences', 'Improved visibility into marketing outcomes'],
    },
  },
  {
    title: 'Loan Risk Classifier',
    category: 'Financial Analytics',
    year: '2025',
    tags: ['Scikit-learn', 'Python', 'MySQL'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['python', 'mysql', 'r'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A transparent credit-risk model for estimating loan repayment risk from applicant information.',
      background: 'Loan decisions require a consistent view of repayment risk while remaining understandable and fair to applicants.',
      objective: 'Estimate default probability, compare model quality, and explain the financial attributes behind risk classifications.',
      dataInput: ['Applicant income and employment data', 'Loan amount and repayment terms', 'Credit history and previous outcomes'],
      methodology: ['Clean and validate applicant data', 'Explore default-related variables', 'Train and compare classifiers', 'Review feature importance and model fairness'],
      results: ['Produced consistent risk estimates', 'Identified influential repayment factors', 'Documented model quality and limitations'],
    },
  },
  {
    title: 'E-commerce Performance',
    category: 'Business Intelligence',
    year: '2024',
    tags: ['KPI', 'MySQL', 'Tableau'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['html', 'css', 'javascript'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A performance dashboard that connects online sales, products, and customer behavior.',
      background: 'Online stores generate data across orders, products, and customer journeys, but isolated reports make performance difficult to understand.',
      objective: 'Create a concise view of revenue, conversion, product performance, and customer purchasing behavior.',
      dataInput: ['Orders and transaction values', 'Product catalogue and category data', 'Customer and conversion events'],
      methodology: ['Model commerce data relationships', 'Define business performance metrics', 'Analyze product and customer trends', 'Design a responsive reporting interface'],
      results: ['Centralized essential commerce metrics', 'Revealed strong and weak product groups', 'Made sales performance easier to monitor'],
    },
  },
  {
    title: 'Public Health Trends',
    category: 'Exploratory Analysis',
    year: '2024',
    tags: ['Data Cleaning', 'Python', 'Dashboard'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['r', 'python', 'tableau'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'An exploratory public-health analysis for communicating changes across regions and time.',
      background: 'Public-health datasets can contain meaningful geographic and temporal patterns, but inconsistent reporting makes comparison challenging.',
      objective: 'Clean public-health records and communicate important trends without hiding uncertainty or data limitations.',
      dataInput: ['Regional health indicators', 'Population and demographic measures', 'Time-period and reporting metadata'],
      methodology: ['Audit missing and inconsistent records', 'Standardize indicators and population rates', 'Explore regional and temporal patterns', 'Build accessible comparative visualizations'],
      results: ['Clarified major health trends', 'Enabled fairer regional comparison', 'Documented data quality limitations'],
    },
  },
  {
    title: 'Price Optimization Model',
    category: 'Decision Science',
    year: '2024',
    tags: ['Regression', 'Pandas', 'Tableau'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python', 'r', 'mysql'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A decision model for exploring how price changes may affect demand and revenue.',
      background: 'Pricing decisions influence both customer demand and business performance. Historical results can reveal sensitivity, but the relationship is rarely linear.',
      objective: 'Estimate price sensitivity and identify price ranges that balance demand, revenue, and commercial goals.',
      dataInput: ['Historical prices and sales volumes', 'Product and category attributes', 'Promotion and competitor indicators'],
      methodology: ['Prepare price and demand history', 'Measure elasticity patterns', 'Train regression-based response models', 'Simulate pricing scenarios'],
      results: ['Estimated product price sensitivity', 'Compared revenue across scenarios', 'Created evidence for pricing discussions'],
    },
  },
  {
    title: 'Survey Insights Dashboard',
    category: 'Data Visualization',
    year: '2024',
    tags: ['Survey Data', 'MySQL', 'Tableau'],
    images: ['/project-churn-insights.svg', '/project-churn-dashboard.svg'],
    technologies: ['tableau', 'r', 'mysql'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'An interactive survey dashboard that turns response data into clear audience insights.',
      background: 'Survey results often remain in wide spreadsheets that make it difficult to compare questions, respondent groups, and open feedback.',
      objective: 'Summarize survey responses, reveal meaningful group differences, and make findings accessible to non-technical users.',
      dataInput: ['Structured survey responses', 'Respondent profile attributes', 'Question labels and response scales'],
      methodology: ['Clean and label survey responses', 'Calculate response distributions', 'Compare respondent segments', 'Design interactive question-level views'],
      results: ['Simplified survey interpretation', 'Highlighted differences between groups', 'Created reusable reporting views'],
    },
  },
  {
    title: 'Traffic Volume Forecast',
    category: 'Predictive Analytics',
    year: '2024',
    tags: ['Forecasting', 'Python', 'Visualization'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python', 'r', 'tableau'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A forecasting project for anticipating traffic demand across locations and time periods.',
      background: 'Traffic volume changes by hour, day, location, weather, and public activity. Understanding these cycles supports better operational planning.',
      objective: 'Forecast traffic volume and communicate when and where congestion pressure is most likely to occur.',
      dataInput: ['Historical traffic counts', 'Location and road attributes', 'Calendar and weather indicators'],
      methodology: ['Validate and aggregate traffic records', 'Explore recurring temporal patterns', 'Train and compare forecasting models', 'Visualize expected demand and peak periods'],
      results: ['Estimated future traffic volume', 'Identified recurring congestion periods', 'Supported location-based planning decisions'],
    },
  },
]

export const getProjectSlug = ({ title }: Pick<Project, 'title'>) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
