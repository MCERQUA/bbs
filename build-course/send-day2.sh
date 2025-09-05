#!/bin/bash

# Send Day 2 Email
TO="${1:-mikecerqua@gmail.com}"
SUBJECT="Day 2: The \$3,500 Tax Mistake 70% of Contractors Make Every Year"
FROM="Blue Collar Business School <noreply@bluecollarbusinessschool.com>"
EMAIL_FILE="/home/mikecerqua/projects/BBS/build-course/approved/week-1/day-02.html"

# Check if email file exists
if [ ! -f "$EMAIL_FILE" ]; then
    echo "Error: Email file not found at $EMAIL_FILE"
    exit 1
fi

echo "Sending Day 2 email to $TO..."
echo "======================================"
echo "TO: $TO"
echo "FROM: $FROM"
echo "SUBJECT: $SUBJECT"
echo "======================================"
echo "Email content: $EMAIL_FILE"
echo "======================================"

# For actual email sending, you would use:
# mail -s "$SUBJECT" -a "Content-Type: text/html" -a "From: $FROM" "$TO" < "$EMAIL_FILE"

echo "✅ Day 2 email prepared for: $TO"
echo ""
echo "Preview the email by opening:"
echo "file://$EMAIL_FILE"
echo ""
echo "Note: Email has been prepared but not actually sent."
echo "To send emails in production, integrate with an email service provider like SendGrid or AWS SES."