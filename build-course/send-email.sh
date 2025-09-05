#!/bin/bash

# Send Day 1 Welcome Email
# Usage: ./send-email.sh

# Email configuration
TO="mikecerqua@gmail.com"
SUBJECT="Day 1: Welcome to Your Business Transformation | Blue Collar Business School"
FROM="Blue Collar Business School <noreply@bluecollarbusinessschool.com>"
EMAIL_FILE="/home/mikecerqua/projects/BBS/build-course/emails/week-1/day-01-welcome.html"

# Check if email file exists
if [ ! -f "$EMAIL_FILE" ]; then
    echo "Error: Email file not found at $EMAIL_FILE"
    exit 1
fi

# Send email using mail command (requires mailutils)
# Note: This is a basic example. In production, use a proper email service like SendGrid, AWS SES, etc.
echo "Sending Day 1 email to $TO..."

# For demonstration, we'll just show what would be sent
echo "======================================"
echo "TO: $TO"
echo "FROM: $FROM"
echo "SUBJECT: $SUBJECT"
echo "======================================"
echo "Email content saved at: $EMAIL_FILE"
echo "======================================"

# In production, you would use something like:
# mail -s "$SUBJECT" -a "Content-Type: text/html" -a "From: $FROM" "$TO" < "$EMAIL_FILE"
# Or use a service like SendGrid:
# curl --request POST \
#   --url https://api.sendgrid.com/v3/mail/send \
#   --header "Authorization: Bearer $SENDGRID_API_KEY" \
#   --header 'Content-Type: application/json' \
#   --data @email.json

echo "Note: Email has been prepared but not actually sent."
echo "To send emails in production, integrate with an email service provider."
echo ""
echo "Preview the email by opening:"
echo "file://$EMAIL_FILE"