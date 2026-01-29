# Adding YouTube Videos to Achievement Cards

This guide explains how to add YouTube videos to your achievement cards.

## Step 1: Get YouTube Video IDs

For each competition video on YouTube, you need to extract the video ID:

### Example YouTube URL:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### Video ID is:

```
dQw4w9WgXcQ
```

The video ID is the part after `v=` in the URL.

## Step 2: Update the HTML File

Open `pages/achievements.html` and find each achievement card. Replace the placeholder video IDs with your actual YouTube video IDs.

### Current placeholder format:

```html
<article
  class="achievement-card"
  data-video-id="YOUR_VIDEO_ID_1"
  style="cursor: pointer;"
></article>
```

### Updated format:

```html
<article
  class="achievement-card"
  data-video-id="dQw4w9WgXcQ"
  style="cursor: pointer;"
></article>
```

## Example for All 13 Competitions:

1. **28/07/2023** - بطولة المغرب للأيكيدو
   - Find: `data-video-id="YOUR_VIDEO_ID_1"`
   - Replace with: `data-video-id="YOUR_ACTUAL_VIDEO_ID"`

2. **27/05/2023** - بطولة جهة الرباط سلا القنيطرة للأيكيدو
   - Find: `data-video-id="YOUR_VIDEO_ID_2"`
   - Replace with: `data-video-id="YOUR_ACTUAL_VIDEO_ID"`

3. **20/05/2023** - كأس حمزة الموساوي
   - Find: `data-video-id="YOUR_VIDEO_ID_3"`
   - Replace with: `data-video-id="YOUR_ACTUAL_VIDEO_ID"`

... and so on for all 13 cards.

## Step 3: Test the Functionality

1. Open `achievements.html` in your browser
2. Click on any achievement card
3. The video should open in a popup modal and start playing automatically
4. Click the X button to close the modal
5. You can also press ESC key to close the modal

## Features:

✅ Click on any card to open the video  
✅ Video plays automatically  
✅ Close button (X) to exit  
✅ ESC key to close  
✅ Click outside video to close  
✅ Responsive design (works on mobile)  
✅ Smooth animations

## Important Notes:

- Make sure your YouTube videos are **public** or **unlisted** (not private)
- If a card doesn't have a video yet, leave it as `YOUR_VIDEO_ID_X` - clicking it will show a message
- The video will stop playing when you close the modal
