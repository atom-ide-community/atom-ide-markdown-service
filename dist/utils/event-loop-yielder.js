"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxTimeError = exports.eventLoopYielder = void 0;
function eventLoopYielder(delayMs, maxTimeMs) {
    const started = performance.now();
    let lastYield = started;
    return async function () {
        const now = performance.now();
        if (now - lastYield > delayMs) {
            await new Promise(setImmediate);
            lastYield = now;
        }
        return now - started <= maxTimeMs;
    };
}
exports.eventLoopYielder = eventLoopYielder;
function maxTimeError(name, timeS) {
    const err = new Error("Max time reached");
    atom.notifications.addError(`${name} took more than ${timeS} seconds to complete`, {
        dismissable: true,
        description: `${name} took too long to complete and was terminated.`,
        stack: err.stack,
    });
    return err;
}
exports.maxTimeError = maxTimeError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbG9vcC15aWVsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2V2ZW50LWxvb3AteWllbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQSxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsU0FBaUI7SUFDakUsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ2pDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQTtJQUN2QixPQUFPLEtBQUs7UUFDVixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDN0IsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLE9BQU8sRUFBRTtZQUM3QixNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQy9CLFNBQVMsR0FBRyxHQUFHLENBQUE7U0FDaEI7UUFDRCxPQUFPLEdBQUcsR0FBRyxPQUFPLElBQUksU0FBUyxDQUFBO0lBQ25DLENBQUMsQ0FBQTtBQUNILENBQUM7QUFYRCw0Q0FXQztBQUdELFNBQWdCLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUN0RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxtQkFBbUIsS0FBSyxzQkFBc0IsRUFBRTtRQUNqRixXQUFXLEVBQUUsSUFBSTtRQUNqQixXQUFXLEVBQUUsR0FBRyxJQUFJLGdEQUFnRDtRQUNwRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7S0FDakIsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDO0FBUkQsb0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQSBoZWxwZXIgdG8gYWxsb3cgdGhlIEphdmFTY3JpcHQgZXZlbnQgbG9vcCBjb250aW51ZSBmb3IgYSBnaXZlbiBpbnRlcnZhbCBiZXR3ZWVuIGVhY2hcclxuICogaXRlcmF0aW9uIG9mIGEgQ1BVIGludGVuc2l2ZSBsb29wLiBJZiB0aGUgdGltZSBzcGVudCBpbiB0aGUgbG9vcCByZWFjaGVzIHRoZSBnaXZlblxyXG4gKiBtYXhUaW1lLCB0aGUgb3BlcmF0aW9uIGlzIGtpbGxlZC5cclxuICpcclxuICogQHJldHVybnMgQW4gYXN5bmMgZnVuY3Rpb24gdG8gY2FsbCBpbnNpZGUgeW91ciBoZWF2eSBsb29wLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGlmXHJcbiAqICAgICB0aGUgb3BlcmF0aW9uIGhhcyBleGNlZWRlZCB0aGUgZ2l2ZW4gbWF4IHRpbWUgKGB0cnVlYCBvdGhlcndpc2UpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50TG9vcFlpZWxkZXIoZGVsYXlNczogbnVtYmVyLCBtYXhUaW1lTXM6IG51bWJlcikge1xyXG4gIGNvbnN0IHN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gIGxldCBsYXN0WWllbGQgPSBzdGFydGVkXHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uICgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICBpZiAobm93IC0gbGFzdFlpZWxkID4gZGVsYXlNcykge1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShzZXRJbW1lZGlhdGUpXHJcbiAgICAgIGxhc3RZaWVsZCA9IG5vd1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vdyAtIHN0YXJ0ZWQgPD0gbWF4VGltZU1zXHJcbiAgfVxyXG59XHJcblxyXG4vKiogVGhyb3dzIG1heGltdW0gdGltZSByZWFjaGVkIGVycm9yICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXhUaW1lRXJyb3IobmFtZTogc3RyaW5nLCB0aW1lUzogbnVtYmVyKSB7XHJcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWF4IHRpbWUgcmVhY2hlZFwiKVxyXG4gIGF0b20ubm90aWZpY2F0aW9ucy5hZGRFcnJvcihgJHtuYW1lfSB0b29rIG1vcmUgdGhhbiAke3RpbWVTfSBzZWNvbmRzIHRvIGNvbXBsZXRlYCwge1xyXG4gICAgZGlzbWlzc2FibGU6IHRydWUsXHJcbiAgICBkZXNjcmlwdGlvbjogYCR7bmFtZX0gdG9vayB0b28gbG9uZyB0byBjb21wbGV0ZSBhbmQgd2FzIHRlcm1pbmF0ZWQuYCxcclxuICAgIHN0YWNrOiBlcnIuc3RhY2ssXHJcbiAgfSlcclxuICByZXR1cm4gZXJyXHJcbn1cclxuIl19