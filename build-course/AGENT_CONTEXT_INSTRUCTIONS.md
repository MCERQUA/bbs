# Agent Context Instructions for Email Course Generation

## CRITICAL CONTEXT MANAGEMENT

This document defines EXACTLY what context each agent should have for their specific phase of the email generation process.

---

## PHASE 1: Research Agent
### Context Level: FULL PROJECT CONTEXT

**Provide this agent with:**
- Complete understanding of Blue Collar Business School mission
- Full 84-day course curriculum outline
- Target audience: contractors, trades professionals, blue-collar business owners
- Course goals: Transform contractors from technicians to CEOs
- Previous day's topics for continuity
- Upcoming topics to avoid redundancy

**Agent Prompt Template:**
```
You are researching content for Day [X] of the Blue Collar Business School 84-day email course.

FULL CONTEXT:
- This is an educational email course for contractors/trades professionals
- Course duration: 84 days covering 8 business categories
- Previous topics covered: [list]
- Today's topic: [topic]
- Upcoming topics: [list]
- Goal: Practical, actionable business education for blue-collar professionals

Research [specific topic] focusing on:
1. Current industry statistics with citations
2. Common contractor problems and solutions
3. Best practices from successful contractors
4. Tools and resources they can use immediately
5. Real-world case studies

Create separate documents for each research aspect with full citations.
```

---

## PHASE 2: Draft Creation Agent
### Context Level: FULL PROJECT CONTEXT

**Provide this agent with:**
- All research documents from Phase 1
- Course style guide and tone requirements
- Previous successful emails as examples
- Full course curriculum
- Target audience demographics and pain points

**Agent Prompt Template:**
```
Create Day [X] email for Blue Collar Business School 84-day course.

FULL CONTEXT:
- Course overview: [provide full description]
- Today's learning objective: [specific goal]
- Research materials: [list all research docs]
- Style requirements: Practical, no jargon, 15-minute read
- Previous day covered: [topic]
- Next day will cover: [topic]

Synthesize the research into an actionable email that helps contractors improve their business TODAY.
```

---

## PHASE 3: Contractor Perspective Review Agent
### Context Level: ZERO PROJECT CONTEXT - FRESH EYES ONLY

**Provide this agent with:**
- ONLY the email content to review
- NO course information
- NO project background
- NO other lessons
- NO understanding this is part of a series

**Agent Prompt Template:**
```
You are a busy contractor who just received this email. You have no context about where it came from or what course it's part of.

Review ONLY this email content from your perspective as a contractor:

[INSERT EMAIL CONTENT HERE]

Answer these questions:
1. Does this make sense without any other context?
2. Is this immediately useful for my contracting business?
3. Can I implement this while managing jobsites?
4. What's confusing or unclear?
5. What jargon or business-speak needs simplification?
6. Would I actually read this entire email?
7. Would I do the action item?

Provide honest, critical feedback as a skeptical contractor who gets too many emails.
```

---

## PHASE 4: Improvement Agent
### Context Level: FULL PROJECT CONTEXT + REVIEW

**Provide this agent with:**
- Original draft
- Contractor's fresh perspective review
- Full course context
- Target audience information
- Course quality standards

**Agent Prompt Template:**
```
Improve this Blue Collar Business School email based on contractor feedback.

FULL CONTEXT:
- This is Day [X] of an 84-day course for contractors
- Course goal: Transform contractors into successful business owners
- Original draft: [provide]
- Contractor review feedback: [provide]

Ultra-think about:
- How to address every contractor concern
- Ways to simplify without losing value
- Adding specific trade examples (roofing, plumbing, electrical, HVAC)
- Making action items more concrete and achievable

Create an improved second draft that maintains course quality while addressing all feedback.
```

---

## PHASE 5: Visual Content Agent
### Context Level: FULL PROJECT CONTEXT

**Provide this agent with:**
- Second draft content
- Understanding this is an EMAIL course (not website)
- Visual style guidelines
- Examples of helpful vs unnecessary visuals

**Agent Prompt Template:**
```
Review this Blue Collar Business School email for visual content needs.

FULL CONTEXT:
- This is an EMAIL course (not a website)
- Contractors read these on phones at jobsites
- Only suggest visuals that SIGNIFICANTLY improve understanding
- Visuals must be practical and printable

Content to review: [provide second draft]

Identify ONLY essential visuals that:
1. Clarify complex calculations
2. Show before/after transformations
3. Provide printable checklists/templates
4. Illustrate multi-step processes

Reject decorative or unnecessary visual elements.
```

---

## PHASE 6: Design Consistency Agent
### Context Level: FULL PROJECT CONTEXT + STYLE GUIDE

**Provide this agent with:**
- Approved content with visual recommendations
- Complete BBS brand guidelines
- Previous approved emails for consistency
- HTML/CSS templates
- Mobile responsiveness requirements

**Agent Prompt Template:**
```
Convert this Blue Collar Business School email to HTML.

FULL CONTEXT:
- Brand colors: Navy (#1e3a8a), Orange (#f59e0b)
- Font standards: [provide]
- Previous emails: [provide 2-3 examples]
- Mobile-first design required

Content: [provide final content]
Visual elements to include: [list from Phase 5]

Create consistent HTML that matches all previous course emails.
```

---

## PHASE 7: Final Review Agent
### Context Level: FULL PROJECT CONTEXT + ALL PHASES

**Provide this agent with:**
- Final HTML email
- Original research and objectives
- All previous review feedback
- Course standards and requirements
- Approval checklist

**Agent Prompt Template:**
```
Final review of Blue Collar Business School Day [X] email.

FULL CONTEXT:
- Course position: Day [X] of 84
- Learning objective: [state]
- Previous reviews addressed: [list]
- Quality standards: [provide checklist]

Review the final HTML email for:
1. Technical accuracy
2. Formatting consistency
3. Link functionality
4. Mobile responsiveness
5. Alignment with course progression
6. Action item clarity

Determine: APPROVED or NEEDS REVISION
If revision needed, be specific about required changes.
```

---

## ENFORCEMENT RULES

1. **NEVER give Phase 3 agent any context** beyond the single email
2. **ALWAYS provide full context** to all other agents
3. **Phase 4 must read Phase 3 feedback** with ultra-think mode
4. **Phase 5 must be restrictive** about visual suggestions
5. **Phase 7 has final veto power** on approval

---

## Context Verification Checklist

Before launching each agent, verify:

- [ ] Phase 1: Has course outline and previous topics? ✓
- [ ] Phase 2: Has all research documents? ✓
- [ ] Phase 3: Has ONLY the email, no other context? ✓
- [ ] Phase 4: Has both draft and review? ✓
- [ ] Phase 5: Knows this is email not website? ✓
- [ ] Phase 6: Has brand guidelines and examples? ✓
- [ ] Phase 7: Has complete paper trail? ✓

---

*This document is MANDATORY reading for anyone running the email generation process.*