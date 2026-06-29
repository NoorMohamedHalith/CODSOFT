# FlowSphere Prototype Connections Map

Below are the interaction specifications configured inside Figma:

1.  **Splash Screen**
    *   *Trigger:* After Delay (2200ms)
    *   *Transition:* Smart Animate (Ease out, 600ms)
    *   *Destination:* Screen 2 (Welcome)

2.  **Welcome Screen**
    *   *Trigger:* On Tap (Continue with Email button)
    *   *Transition:* Slide In Right (Ease out, 400ms)
    *   *Destination:* Screen 3 (Create Account)
    *   *Trigger:* On Tap (Login link at bottom)
    *   *Transition:* Slide In Right (Ease out, 400ms)
    *   *Destination:* Screen 3 (Create Account)

3.  **Create Account**
    *   *Trigger:* On Tap (Create Account button)
    *   *Transition:* Smart Animate (Ease out, 500ms)
    *   *Destination:* Screen 4 (OTP Verification)
    *   *Trigger:* On Tap (Back Chevron button)
    *   *Transition:* Slide Out Right (Ease in, 400ms)
    *   *Destination:* Screen 2 (Welcome)

4.  **OTP Verification**
    *   *Trigger:* On Tap (Verify Code button)
    *   *Transition:* Smart Animate (Ease out, 400ms)
    *   *Destination:* Screen 5 (Profile Setup)
    *   *Trigger:* On Tap (Back Chevron button)
    *   *Transition:* Slide Out Right (Ease in, 400ms)
    *   *Destination:* Screen 3 (Create Account)

5.  **Profile Setup**
    *   *Trigger:* On Tap (Save & Continue / Skip buttons)
    *   *Transition:* Slide In Right (Ease out, 400ms)
    *   *Destination:* Screen 6 (Choose Interests)
    *   *Trigger:* On Tap (Back Chevron button)
    *   *Transition:* Slide Out Right (Ease in, 400ms)
    *   *Destination:* Screen 4 (OTP Verification)

6.  **Choose Interests**
    *   *Trigger:* On Tap (Save & Finish button)
    *   *Transition:* Smart Animate (Ease out, 600ms)
    *   *Destination:* Screen 7 (Success)
    *   *Trigger:* On Tap (Back Chevron button)
    *   *Transition:* Slide Out Right (Ease in, 400ms)
    *   *Destination:* Screen 5 (Profile Setup)

7.  **Success Screen**
    *   *Trigger:* On Tap (Start Exploring / Dashboard buttons)
    *   *Transition:* Dissolve (Ease out, 500ms)
    *   *Destination:* Screen 1 (Splash) - loops back to start.
