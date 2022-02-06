using System.Runtime.InteropServices;
using UnityEngine;

public class ui : MonoBehaviour
{
    public SunController sunController;

    [DllImport("__Internal")]
    private static extern void Hello();

    void Start()
    {
        Hello();

        Debug.Log("ui start finished");
    }
}
