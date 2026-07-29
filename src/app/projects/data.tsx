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
const ieeePaperUrl = 'https://ieeexplore.ieee.org/document/10963495'
const ieeePaperUrl2 = 'https://ieeexplore.ieee.org/document/11101587'

// Add another card by copying this object and replacing its content.
export const projects: Project[] = [
  {
    title: 'Machine Learning for Indonesian Stock Market Index Forecasting: The Role of Macroeconomic Indicators',
    category: 'Time Series Forecasting',
    year: '2026',
    tags: ['Forecasting', 'Time Series', 'Python'],
    // public/Porto1.png becomes '/Porto1.png' here.
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python'],
    repositoryUrl: wilsonGithub,
    details: {
      summary: 'A multivariate time-series study evaluating how global and domestic macroeconomic covariates affect forecasting performance for the IDX Composite, LQ45, and Kompas100 indices.',
      background: 'The Indonesian stock market is highly volatile and sensitive to shifting domestic and global macroeconomic conditions. Existing studies often focus on single models or indices, leaving a gap in understanding how diverse macroeconomic indicators influence forecasting performance across multiple architectures and horizons.',
      objective: 'Evaluate the effectiveness of global and domestic macroeconomic covariates in forecasting the IDX Composite, LQ45, and Kompas100 indices, compare Random Forest against deep learning models, and develop an interactive decision-support dashboard.',
      dataInput: [
        'Daily closing prices for the IDX Composite, LQ45, and Kompas100 indices sourced from Yahoo Finance and Google Finance.',
        'Global macroeconomic indicators including Brent crude oil prices, WTI crude oil prices, and the USD/IDR exchange rate.',
        'Domestic macroeconomic indicators including GDP, inflation rate, CPI, and the unemployment rate.',
      ],
      methodology: [
        'Data preprocessing: merge stock and macroeconomic data by timestamp, apply log-returns, normalize to a 0–1 range, and split chronologically into 80:20 train-test sets.',
        'Experimental design: evaluate 297 settings across three forecasting models, three indices, and 11 covariate configurations.',
        'Forecasting scenarios: test short-term, medium-term, and long-term horizons at 1-day, 5-day, and 10-day intervals.',
        'Model evaluation: compare forecasting accuracy using MSE, MAE, and primarily MAPE.',
      ],
      results: [
        'The Random Forest model consistently outperformed deep learning models across all horizons, achieving the lowest average error of 1.00%.',
        'The impact of macroeconomic variables was index-specific: the IDX Composite was more sensitive to domestic indicators, while LQ45 and Kompas100 responded more strongly to global energy prices.',
        'Using all macroeconomic covariates simultaneously could introduce noise and reduce predictive accuracy, emphasizing the importance of targeted feature selection.',
      ],
    },
  },
  {
    title: 'Improving Abstractive News Summarization Using Keyword Extraction for Human-Like Summaries',
    category: 'Natural Language Processing',
    year: '2025',
    tags: ['NLP', 'Summarization', 'LLMs'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python'],
    repositoryUrl: ieeePaperUrl2,
    details: {
      summary: 'A study exploring how keyword extraction techniques can improve abstractive news summarization quality and readability for BART and DistilBART models.',
      background: 'As online information grows rapidly, abstractive summarization has become essential for condensing long news articles into concise, human-like summaries. Existing models often struggle with fluency and relevance, which creates a need for methods that better focus on the most important information.',
      objective: 'Improve the accuracy and readability of abstractive news summaries by integrating RAKE, YAKE, and KeyBERT into BART and DistilBART models and evaluating the effect on summarization performance.',
      dataInput: [
        'The CNN-DailyMail news summarization dataset containing news articles and reference highlights.',
        'A reduced subset of the dataset containing 2,871 training samples, 115 validation samples, and 134 test samples.',
        'Text fields that include article content and generated highlights for summarization tasks.',
      ],
      methodology: [
        'Data preprocessing: clean duplicated entries, remove the id column, remove punctuation and stopwords, and apply lemmatization.',
        'Keyword extraction: use RAKE, YAKE, and transformer-based KeyBERT variants as signals to guide the summarization focus.',
        'Summarization modeling: process the article and extracted keywords through BART-large-CNN and DistilBART-CNN-12-6.',
        'Evaluation: compare generated summaries against human reference summaries using ROUGE-1, ROUGE-2, and ROUGE-L scores.',
      ],
      results: [
        'Incorporating keyword extraction improved ROUGE scores for both BART and DistilBART compared with their baseline versions.',
        'The BART model combined with RAKE achieved the highest ROUGE-1 score of 0.3733, while DistilBART with KeyBERT reached 0.3722.',
        'The keyword-guided summaries were more balanced, coherent, and readable than the original gold reference summaries.',
      ],
    },
  },
  {
    title: 'Enhancing Machine Failure Prediction Using Ensemble Models and Oversampling Techniques',
    category: 'Predictive Maintenance',
    year: '2024',
    tags: ['Machine Learning', 'Imbalanced Data', 'Python'],
    images: ['/project-churn-dashboard.svg', '/project-churn-insights.svg'],
    technologies: ['python'],
    repositoryUrl: ieeePaperUrl,
    details: {
      summary: 'A study evaluating ensemble learning models and oversampling techniques for predicting rare machine failures in highly imbalanced manufacturing data.',
      background: 'Machine breakdowns in modern manufacturing create major financial losses and safety risks, making predictive maintenance essential for minimizing downtime and improving operational efficiency. The main challenge is that failure cases are extremely rare compared with normal operations, which can significantly affect model performance.',
      objective: 'Evaluate the effectiveness of ensemble models such as Bagging, AdaBoost, Gradient Boosting, Random Forest, and XGBoost for machine failure prediction, and assess whether SMOTE and ADASYN can improve performance for the minority failure class.',
      dataInput: [
        'The Machine Predictive Maintenance Classification dataset containing 10,000 machine operation instances.',
        'Operational features including air temperature, process temperature, rotational speed, torque, tool wear, and product quality type.',
        'A highly imbalanced binary target where 0 indicates no failure and 1 indicates failure.',
      ],
      methodology: [
        'Data preprocessing: remove irrelevant identifiers, encode product quality type numerically, and split the data into 80% training and 20% testing.',
        'Model configuration: train five ensemble models with 100 estimators and a fixed random state for consistency.',
        'Oversampling application: apply SMOTE and ADASYN to the training data to increase representation of the minority class.',
        'Evaluation: compare model performance using accuracy, precision, recall, and F1-score.',
      ],
      results: [
        'Gradient Boosting achieved the best performance among the baseline models without oversampling, reaching an F1-score of 0.78 for the failure class and an overall accuracy of 0.99.',
        'SMOTE and ADASYN did not improve performance and instead reduced F1-scores for the failure class across the evaluated models.',
        'The findings suggest that strong ensemble methods are more effective than synthetic oversampling for handling class imbalance in this dataset.',
      ],
    },
  },
]

export const getProjectSlug = ({ title }: Pick<Project, 'title'>) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
