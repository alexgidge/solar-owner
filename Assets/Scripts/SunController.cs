using System;
using UnityEngine;
using UnityEngine.UI;

public class SunController : MonoBehaviour
{
    public GameObject SunSprite;
    public Text txtWallet;
    
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SetWallet(string wallet)
    {
        if (String.IsNullOrWhiteSpace(wallet))
        {
            txtWallet.text = "no wallet ID";
        }
        else
        {
            txtWallet.text = wallet;
        }
    }

    public void SetSOLOwnership(string walletFound)
    {
        if (walletFound == "true")
        {
            SunSprite.SetActive(true);
        }
        else
        {
            //TODO: Check NFT ownership
            SunSprite.SetActive(false);
        }
    }
}