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
]

export const getProjectSlug = ({ title }: Pick<Project, 'title'>) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
