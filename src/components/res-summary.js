const ResumeSummary = (sum1, sum2, sum3, sum4) => {
  const summaryEle = document.createElement('div');

  const summaryTitle = document.createElement('div');
  const summaryList = document.createElement('ul');
  const summary1 = document.createElement('li');
  const summary2 = document.createElement('li');
  const summary3 = document.createElement('li');
  const summary4 = document.createElement('li');
  
  summaryEle.id = "summary-container";

  summaryTitle.textContent = "Summary";
  summaryTitle.id = "summary-title";
  summaryTitle.className = "section-title";

  summary1.textContent = sum1;
  summary1.className = 'sum-item';
  summary2.textContent = sum2;
  summary2.className = 'sum-item';
  summary3.textContent = sum3;
  summary3.className = 'sum-item';
  summary4.textContent = sum4;
  summary4.className = 'sum-item';

  summaryList.append(summary1, summary2, summary3, summary4);
  summaryEle.append(summaryTitle, summaryList);

  return summaryEle;
}

export default ResumeSummary;