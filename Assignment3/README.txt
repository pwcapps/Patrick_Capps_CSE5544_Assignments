Evaluation: This vizualization shows that the data is highly variable. We can get
an overview of how encounters change before each patient's TBI and after. Some
patients have more frequent symptoms after the event, while some patients have
no more encounters or less frequent symptoms. A few patients have encounters with
more instances after the injury of mental health issues like depression and anxiety
or things like vision and hearing issues, which could be related to the injury.
However, this is only obvious in about 6 of the 41 patients in the dataset.

One pro of the design is that it can fit every patient's data on the screen for
a good overview. Interaction has not been implemented so we cannot really see
detail, especially in periods of frequent encounters with symptoms. In cases like
this the visualization becomes cluttered and it becomes hard to tell what symptoms
are present. In the opposite case, many areas of patients' lines are simply gray
and give little information. I think this visualization does work for the basic
task of comparing encounters in relation to the patient's TBI.


Implementation:
This design was implemented using D3.js. The dataset was reduced to the patient
id, pre max days, post max days for each encounter, as well as distance from the
TBI and symptom data for the encounter, then sorted by patient ID then days from
TBI. This allowed for drawing each patient's entire line before coloring it in
with symptom data.
